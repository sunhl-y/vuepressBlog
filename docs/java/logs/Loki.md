# Loki

[Loki官方文档](https://grafana.com/docs/loki/next/fundamentals/overview/)

[Loki中文文档](https://github.com/linqianye/loki-doc/tree/main/docs)

[Loki开源地址](https://github.com/grafana/loki)



## 简单应用场景说明



需求：下载近七天日志

实现：每隔一小时定期上传日志，平台监测并将上传的日志存储到loki，点击下载时直接根据时间段从loki中取近七天日志



## 概述



Loki：轻量级日志系统



**特点：**

- Go语言实现
- 日志采集
- 日志压缩存储
- 标签分组
- 日志可视化
- 可扩展性（每个组件都可以单独运行）
- 多租户（通过Promtail分配tenantID，租户ID从请求的HTTP Header提取）
- LogQL（有小小的学习成本）
- 中小数据量比较适合



**对比ELK:**

- 轻量
- 存储成本低
- 检索能力较差
- 功能单一，数据处理及清洗没有ELK强大



**场景说明：**

适用：

- 查看日志解决故障
- 少量小范围的日志查看，如5分钟内的日志，5分钟前的500条日志
- 分布式系统日志查看
- 基于k8s日志收集



不适用：

- 大型数据聚合和统一分析
- 大范围查询日志
- 依赖内存，可能OOM



**原理：**

为每个日志流设置一组标签，根据标签索引

- Promtail，基于prometheus，采集客户端日志加上标签发送给Loki（代理获取日志将日志转换成流并通过HTTP API将流推送给Loki）
- Loki，日志存储解析，并提供查询API给下游展示
- Grafana，从Loki中获取日志信息，可视化展示

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1648631882869-fd010ff6-0514-42e5-88a1-482a5930f64c.png)

日志数据本身也会被压缩

Loki能够以微服务模式运行，也就是把自身的各个模块分解出单个进程，比如横向扩展多个查询器模块可提高查询性能





**组件：**

promtail会将日志推送至Loki提供的基于Http的API，Loki将收到的日志按照标签进行分发存储，并在需要时使用LogQL进行查询

Loki实现由众多的组件组成，每个组件都会拉起一个gRPC服务实现内部互通，同时也对外暴露一个HTTP/1的服务来提供外部服务以应答API请求



![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1648629990574-7de093e5-90a2-4ac8-a4b3-3cb6ce4100b8.png)

- Distributor，分发从客户端上报的日志，校验完后分发给ingester处理，一致性哈希
- Ingester，将日志转储到后端存储，负责构建和刷新chunck（内存缓存刷盘）
- Query frontend（optional），加速查询
- Querier，查询
- Chunk Store，后端存储框架，索引存储/日志数据存储

- - 索引存储，Amazon DynamoDB, Google Bigtable, Apsache Cassandra
  - 日志存储，Amazon DynamoDB, Google Bigtable, Apsache Cassandra, Amazon S3, Google Cloud Store



**安装部署**

https://grafana.com/docs/loki/next/installation/

- 适用Tanka安装
- Helm+k8s（适用Loki微服务模式）
- docker-compose安装
- 本地安装运行
- 从源代码安装



**一般流程**

- 下载安装Loki和Promtail
- 下载两个的配置文件
- 启动Loki
- 更新Promtail的配置文件
- 启动Promtail



## Loki HTTP API



**如果需要直接向Loki推送日志，可以直接调用Loki HTTP API**

**列出了一些常用的API如下**



返回结果类型：

- 矩阵：一个数值表，其中每一行代表一个不同的标签集，列是该行在被查询时间内的每个样本值。矩阵类型只有在运行计算一些数值的查询时才会返回。
- 即时向量：在类型中仅表示为 ，即时向量表示给定标签集的计算的最新值。即时向量只在针对单一时间点进行查询时返回。
- 流：流是一组给定标签集在查询时间范围内的所有值（日志）。流是唯一会导致日志行被返回的类型。



### 查询日志流

#### `GET /loki/api/v1/query`**（允许对单一时间点执行查询）**



参数：

query：要执行的LogQL查询

limit: 要返回的最大条目数

time: 查询的评估时间作为一个纳秒的 Unix 纪元。默认为现在。

direction：确定日志的排序顺序。支持的值为forward或backward。默认为backward

示例：

```json
http://192.168.15.139:30100/loki/api/v1/query
?direction=BACKWARD
&limit=1000
&query=sum(rate({job="anychatlog"}[2d]))
```



#### `GET /loki/api/v1/query_range`**（查询某个时间段日志）**



参数：

query：要执行的LogQL查询

limit: 要返回的最大条目数

start: 查询的开始时间，以纳秒 Unix 纪元表示。默认为一小时前。

end: 查询的结束时间，以纳秒 Unix 纪元表示。默认为现在。



step: 以duration格式或浮点秒数查询分辨率步长。duration指形式为 的 Prometheus 持续时间字符串[0-9]+[smhdwy]。例如，5m 表示持续时间为 5 分钟。默认为基于start和的动态值end。仅适用于产生矩阵响应的查询类型。

interval：这个参数是实验性的；请参阅step vs interval下的说明。只返回（或大于）指定间隔的条目，可以是duration格式或浮点数。仅适用于产生流响应的查询。

direction：确定日志的排序顺序。支持的值为forward或backward。默认为backward.

示例：

```json
http://192.168.15.139:30100/loki/api/v1/query_range
?direction=BACKWARD
&limit=1000
&query={job="anychatlog"} 
&start=1641280408415000000
&end=1641453208415000000
&step=120
```

### 查询标签

#### `GET /loki/api/v1/labels`**（查询标签列表）**

参数：

start：开始时间，默认为6小时前

end：查询结束时间，默认为现在

示例：

```json
 http://192.168.15.139:30100/loki/api/v1/labels
```



#### `GET /loki/api/v1/label/<name>/values`(查询标签值)

参数：

name：GET /loki/api/v1/label中的标签

start：开始时间，默认为6小时前

end：查询结束时间，默认为现在

示例：

```json
http://192.168.15.139:30100/loki/api/v1/label/job/values
```



### 匹配特定标签集列表

```json
GET /loki/api/v1/series
POST /loki/api/v1/series
```

参数：

match[]=<series_selector>：选择要返回的日志流的标签。match[]必须至少提供一个参数。

start=: 开始时间戳。

end=: 结束时间戳。

示例：

```json
http://192.168.15.139:30100/loki/api/v1/series
?start=1640922291907000000
&end=1641527091908000000
&match[]={host="192.168.11.123"}
```

### 删除日志流

需要2.3.0以上版本的Loki，并按官方文档进行配置



#### 删除日志流

```java
POST loki_addr/loki/api/admin/delete?match[]
```

参数：

match[]:标签匹配器，用于标识要从中删除的流,必须至少提供一个参数

<series_selector>:查询参数

start:开始的时间戳

end:结束的时间戳

示例：

```java
http://192.168.15.139:30100/loki/api/admin/delete?match[]={job="anychatlog"}
```



### 推送日志

#### POST /loki/api/v1/push

向loki发送日志条目的endpoint，默认POST主体是 snappy-compressed protobuf 消息

可以传 json 格式，设置 content-type为application/json

```json
{
  "streams": [
    {
      "stream": {
        "label": "value" // 标签，可以使用多个标签标识日志流
      },
      "values": [
        [ "<unix epoch in nanoseconds>", "<log line>" ], // 格式固定，时间戳+日志行
        [ "<unix epoch in nanoseconds>", "<log line>" ]
      ]
    }
  ]
}
```



### 其他

#### GET /loki/api/v1/tail

websocket endpoint，根据查询来流转日志信息

#### GET /ready

当Loki采集器准备好接受流量时，/ready会返回HTTP 200。如果在Kubernetes上运行Loki，可以作为准备就绪的探测器。



#### POST /flush

 触发刷新由ingesters持有的所有内存块到后备存储。主要用于本地测试。



## LogQL



如果需要进行更复杂的查询，可以自行编写LogQL



[LogQL官方文档](https://grafana.com/docs/loki/latest/logql/)

[Loki查询语言LogQL使用](https://cloud.tencent.com/developer/article/1839410)（相对较全面）

[Loki的LogQL查询语法](https://www.feiyiblog.com/2021/10/11/Loki的LogQL查询语法/)（标签过滤+行过滤）



- log query：返回日志行的内容
- metric query：扩展了日志查询，根据查询结果来计算数值



## Loki配置 - Limits_Config

https://www.jianshu.com/p/2674c27d17c8



## Java简单应用

```java
@Component
public class LokiService {
    private final WebClient webClient;
    
    private static final String SYSLOG_QUERY_URL =
        "loki/api/v1/query_range?query={query}&start={start}&end={end}&limit={limit}";
    private static final String SYSLOG_PUSH_URL = "loki/api/v1/push";
    
    // LokiProperties中存储loki地址
    public LokiService(WebClient.Builder builder, LokiProperties properties) {
        this.webClient = builder.baseUrl(properties.getUri()).build();
    }
    
    // 查询一定时间范围内的数据
    public DeviceSyslogsQueryRes queryLogs(Map<String, String> params) {
        
        return webClient
            .get()
            .uri(SYSLOG_QUERY_URL, params)
            .retrieve()
            .bodyToMono(new ParameterizedTypeReference<DeviceSyslogsQueryRes>() {})
            .block();
    }
    
    // 向loki推送数据
    public void pushLogs(Document request) {
        webClient
            .post()
            .uri(SYSLOG_PUSH_URL)
            .bodyValue(request)
            .retrieve()
            .bodyToMono(new ParameterizedTypeReference<Result<String>>() {})
            .map(Result::getResult)
            .block();
    }
}
```



## 可视化界面

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239046511-2dde2674-3a25-462a-aac2-d12ab701b344.png)

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239065864-3f56e8a3-c48a-450b-b33b-9712d4e841ce.png)

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239073520-8427b140-cf74-4bca-9a12-8a168d06e2b2.png)![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239126328-623c4ccd-8045-44f0-8742-c50c7a874afe.png)

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239136913-cffcdbbf-d398-43a1-ba68-08646fe9c27c.png)

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239142022-538c4cfb-605a-4c8d-98f6-874a8f18a8fe.png)



官网:https://grafana.com/grafana/dashboards
![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239161607-b6c5a56c-860a-4aa3-bc18-0b8a27507007.png)

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239161725-2b2a3569-f017-4afe-b41b-dfeb56a9e141.png)

简单粗暴，直接复制node_exporter 的ID导入仪表盘，当然也可以通过其他两种方式导入
![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239161358-5dfe8b30-e068-42d3-af28-d4095fa2b17e.png)

![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239161430-31c86aff-3226-4140-a5d5-ef69420f3c15.png)
![img](https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1649239161653-def61622-d168-43ea-a5b3-f9eb574f1594.png)





------

参考：

[轻量级日志系统Loki原理简介和使用](https://zhuanlan.zhihu.com/p/163809795)（环境搭建）

[再见笨重的ELK！这套轻量级日志收集方案要火](https://segmentfault.com/a/1190000040371914)（docker-compose安装）

[Loki数据过期自动删除策略设计](https://cloud.tencent.com/developer/article/1668946)

[LPG+SpringBoot收集日志](https://juejin.cn/post/7008424451704356872#heading-3)

[SpringBoot2实战：轻量级日志loki集成](http://felord.cn/loki.html#简单上手)

[Loki源码分析之日志写入](https://jishuin.proginn.com/p/763bfbd5a9aa)

