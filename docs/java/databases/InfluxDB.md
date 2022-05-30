# InfluxDB



## 1.什么是InfluxDB？

InfluxDB是一个由 InfluxDBData 开发的开源时序型数据库，由 Go 写成，着力于高性能地查询与存储时序型数据。

InFluxDB 被广泛应用于存储系统的监控数据，IoT行业的实时数据等场景。

可以理解为按时间记录一些数据（常用的监控数据、埋点统计数据等），结合图形化界面（一般配合Grafana）制作图表统计。



InfluxDB三大特性：

- Time Series（时间序列）：允许使用时间相关的函数（如最大、最小、求和等）
- Metrics（度量）：可以实时对大量数据进行计算
- Events（事件）：支持任意的事件数据



## 2.和关系型数据库基础概念对比

| 概念   | MySQL    | InfluxDB                                                     |
| ------ | -------- | ------------------------------------------------------------ |
| 数据库 | database | database                                                     |
| 表     | table    | measurement                                                  |
| 行     | row      | points（time - 每个数据记录时间，主索引，fields-各种无索引的记录值，tags-有索引的属性） |
| 列     | column   | tag，filed，timestamp                                        |



## 3.安装

下载地址：https://dl.influxdata.com/influxdb/releases/influxdb-1.7.4_windows_amd64.zip



------

参考：

[InfluxDB详解_顺其自然~的博客-CSDN博客_influxdb](https://blog.csdn.net/fuhanghang/article/details/105484610)