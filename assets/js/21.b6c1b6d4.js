(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{448:function(e,t,r){"use strict";r.r(t);var _=r(69),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"clickhouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse"}},[e._v("#")]),e._v(" ClickHouse")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://clickhouse.com/docs/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse文档"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clickhouse专业中文社区"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ClickHouse/ClickHouse",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse开源地址"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),r("p",[e._v("Yandex开源 "),r("strong",[e._v("数据库管理系统")]),e._v(" ，主要用于 "),r("strong",[e._v("数据分析")]),e._v("（OLAP）领域，使用C++编写，采用 "),r("strong",[e._v("列式存储")]),e._v("，可使用SQL语句实时生成数据分析报告，支持索引，分布式查询以及近似计算等")]),e._v(" "),r("ul",[r("li",[e._v("今日头条用ClickHouse来做 "),r("strong",[e._v("用户行为分析")]),e._v("，内部一共几千个ClickHouse节点，单集群最大1200节点，总数据量几十PB，日增原始数据300TB左右。")]),e._v(" "),r("li",[e._v("腾讯用ClickHouse做 "),r("strong",[e._v("游戏数据分析")]),e._v("，并且为之建立了一整套监控运维体系。")]),e._v(" "),r("li",[e._v("携程从18年7月份开始接入试用，目前80%的业务都跑在ClickHouse上。每天数据增量十多亿，近百万次查询请求。")]),e._v(" "),r("li",[e._v("快手也在使用ClickHouse，存储总量大约10PB， 每天新增200TB， 90%查询小于3S。")])]),e._v(" "),r("h3",{attrs:{id:"olap场景特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#olap场景特点"}},[e._v("#")]),e._v(" OLAP场景特点")]),e._v(" "),r("ul",[r("li",[e._v("读多于写，重分析")]),e._v(" "),r("li",[e._v("大宽表，读大量行但少量列，结果集较小")]),e._v(" "),r("li",[e._v("数据批量写入（每次写入大于1000行），且数据不更新或少更新")]),e._v(" "),r("li",[e._v("无需事务，数据一致性要求低")])]),e._v(" "),r("p",[e._v("OLTP：传统关系型数据库，主要操作增删改查，强调事务一致性，比如银行系统，电商系统\nOLAP：仓库型数据库，主要是读取数据，做复杂数据分析")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("OLAP产品")]),e._v(" "),r("th",[e._v("技术")]),e._v(" "),r("th",[e._v("延时")]),e._v(" "),r("th",[e._v("查询延迟")]),e._v(" "),r("th",[e._v("SQL支持程度")]),e._v(" "),r("th",[e._v("成产数据成本")]),e._v(" "),r("th",[e._v("支持join")]),e._v(" "),r("th",[e._v("去重方式")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Presto")]),e._v(" "),r("td",[e._v("MPP系统SQL on Hadoop")]),e._v(" "),r("td",[e._v("天/小时级别")]),e._v(" "),r("td",[e._v("一般")]),e._v(" "),r("td",[e._v("非常完善")]),e._v(" "),r("td",[e._v("低")]),e._v(" "),r("td",[e._v("支持")]),e._v(" "),r("td",[e._v("普通精确去重")])]),e._v(" "),r("tr",[r("td",[e._v("Druid")]),e._v(" "),r("td",[e._v("位图索引查找编码预聚合技术")]),e._v(" "),r("td",[e._v("支持实时")]),e._v(" "),r("td",[e._v("低")]),e._v(" "),r("td",[e._v("较完善")]),e._v(" "),r("td",[e._v("中")]),e._v(" "),r("td",[e._v("不成熟")]),e._v(" "),r("td",[e._v("hyperloglog去重")])]),e._v(" "),r("tr",[r("td",[e._v("Kylin")]),e._v(" "),r("td",[e._v("完全预聚合立方体")]),e._v(" "),r("td",[e._v("微批量")]),e._v(" "),r("td",[e._v("非常低")]),e._v(" "),r("td",[e._v("非常完善")]),e._v(" "),r("td",[e._v("高")]),e._v(" "),r("td",[e._v("支持")]),e._v(" "),r("td",[e._v("普通精确去重hyperloglog去重bitmap去重")])]),e._v(" "),r("tr",[r("td",[e._v("ClickHouse")]),e._v(" "),r("td",[e._v("动态聚合查询物化视图")]),e._v(" "),r("td",[e._v("支持实时")]),e._v(" "),r("td",[e._v("低")]),e._v(" "),r("td",[e._v("较完善")]),e._v(" "),r("td",[e._v("低")]),e._v(" "),r("td",[e._v("有限支持")]),e._v(" "),r("td",[e._v("普通精确去重hyperloglog去重")])])])]),e._v(" "),r("h3",{attrs:{id:"clickhouse功能及应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse功能及应用场景"}},[e._v("#")]),e._v(" ClickHouse功能及应用场景")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1648633534434-493f2230-16e4-4b25-a3ab-982a4da692be.png",alt:"img"}})]),e._v(" "),r("h3",{attrs:{id:"clickhouse特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse特性"}},[e._v("#")]),e._v(" ClickHouse特性")]),e._v(" "),r("ol",[r("li",[e._v("数据压缩：ClickHouse会自动对插入的数据进行压缩")]),e._v(" "),r("li",[e._v("磁盘存储：存储成本低")]),e._v(" "),r("li",[e._v("多核心并行处理")]),e._v(" "),r("li",[e._v("分布式查询：数据可以保存在不同的分片上，查询可以再所有分片上并行处理")]),e._v(" "),r("li",[e._v("支持SQL")]),e._v(" "),r("li",[e._v("向量引擎：列向量引擎，可以更高效地使用CPU资源")]),e._v(" "),r("li",[e._v("实时数据更新：使用 MergeTree 引擎对数据进行增量排序，数据可以持续不断地写入到表中并进行合并，而且在整个过程中不会存在任何加锁行为")]),e._v(" "),r("li",[e._v("支持索引：按照排序键对数据进行排序并支持主键索引，可以使其在几十毫秒内完成对特定值或特定范围的查找")]),e._v(" "),r("li",[e._v("支持近似计算：提供许多在允许牺牲数据精度的情况下对查询进行加速的方法")]),e._v(" "),r("li",[e._v("列式存储")])]),e._v(" "),r("p",[e._v("优点：")]),e._v(" "),r("ul",[r("li",[e._v("数据压缩比（10倍）高，存储成本低")]),e._v(" "),r("li",[e._v("支持常用的SQL语法，写入速度非常快，适用于大量的数据更新")]),e._v(" "),r("li",[e._v("查询速度快，处理单查询高吞吐量每台服务器每秒最多数十亿行")])]),e._v(" "),r("p",[e._v("缺点：")]),e._v(" "),r("ul",[r("li",[e._v("不支持事务，没有真正的update/delete")]),e._v(" "),r("li",[e._v("不支持高并发，官方建议qps为100")]),e._v(" "),r("li",[e._v("尽量做1000条以上批量的写入，避免逐行insert或小批量的insert，update，delete操作，ClickHouse底层会不断地做异步数据合并，会影响查询性能")]),e._v(" "),r("li",[e._v("Clickhouse快是因为采用了并行处理机制，即使一个查询，也会用服务器一半的CPU去执行，所以ClickHouse不能支持高并发的使用场景，默认单查询使用CPU核数为服务器核数的一半")])]),e._v(" "),r("p",[r("strong",[e._v("为什么列式数据库比行式数据库快？")])]),e._v(" "),r("p",[e._v("对于大多数查询而言，列式数据库的处理速度至少比行式数据库快100倍：")]),e._v(" "),r("ul",[r("li",[e._v("对于分析类查询，通常只需要读取数据表中的一小部分列，使用列式数据库可以很轻松地实现，而使用行式数据库却必须要读取全部的列，这就带来了性能的损失。")]),e._v(" "),r("li",[e._v("列式数据库按列存储数据，使得数据更容易被压缩，可以降低 I/O 传输的体积，从而使查询速度加快。")]),e._v(" "),r("li",[e._v("由于 I/O 体积的降低，可以使得更多的查询数据被系统缓存，进一步加快了查询的速度。")]),e._v(" "),r("li",[e._v("另外，执行一个查询一般需要处理大量的行，在整个列向量上执行所有操作将比在每一行上执行所有操作更加高效，而且还可以更加充分地利用 CPU 资源，从而提升了查询的性能。")])]),e._v(" "),r("h2",{attrs:{id:"安装部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[e._v("#")]),e._v(" 安装部署")]),e._v(" "),r("p",[e._v("参见：https://clickhouse.com/docs/zh/getting-started/install")]),e._v(" "),r("h2",{attrs:{id:"引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引擎"}},[e._v("#")]),e._v(" 引擎")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1650865174272-8b8cf858-5b2b-4d57-9ada-68bd53df9a58.png",alt:"img"}})]),e._v(" "),r("p",[e._v("ClickHouse的表引擎是ClickHouse服务的核心，它们决定了ClickHouse的以下行为：")]),e._v(" "),r("ol",[r("li",[e._v("数据的存储方式和位置。")]),e._v(" "),r("li",[e._v("支持哪些查询操作以及如何支持。")]),e._v(" "),r("li",[e._v("数据的并发访问。")]),e._v(" "),r("li",[e._v("数据索引的使用。")]),e._v(" "),r("li",[e._v("是否可以支持多线程请求。")]),e._v(" "),r("li",[e._v("是否可以支持数据复制。")])]),e._v(" "),r("p",[e._v("ClickHouse包含以下几种常用的引擎类型：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("MergeTree引擎")]),e._v("：该系列引擎是执行高负载任务的最通用和最强大的表引擎，它们的特点是可以快速插入数据以及进行后续的数据处理，该系列引擎还同时支持数据复制，分区以及一些其他引擎不支持的额外功能")]),e._v(" "),r("li",[r("strong",[e._v("Log引擎")]),e._v("：具有最小功能的轻量级引擎。当你需要快速写入许多小表（最多约有 100 万行）并在后续任务中整体读取它们时使用该系列引擎是最有效的。")]),e._v(" "),r("li",[r("strong",[e._v("集成引擎")]),e._v("：该系列引擎是与其它数据存储以及处理系统集成的引擎，如 Kafka，MySQL 以及 HDFS 等，使用该系列引擎可以直接与其它系统进行交互，但也会有一定的限制。")]),e._v(" "),r("li",[r("strong",[e._v("特殊引擎")]),e._v("：该系列引擎主要用于一些特定的功能，如 Distributed 用于分布式查询，MaterializedView 用来聚合数据，以及 Dictionary 用来查询字典数据等")])]),e._v(" "),r("h3",{attrs:{id:"mergetree系列引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mergetree系列引擎"}},[e._v("#")]),e._v(" MergeTree系列引擎")]),e._v(" "),r("p",[e._v("官方主推的存储引擎，几乎支持所有ClickHouse核心功能")]),e._v(" "),r("h4",{attrs:{id:"mergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mergetree表引擎"}},[e._v("#")]),e._v(" MergeTree表引擎")]),e._v(" "),r("p",[e._v("MergeTree在写入一批数据时，数据总会以数据片段的形式写入磁盘，且数据片段不可修改。为了避免片段过多，ClickHouse会通过后台线程，"),r("strong",[e._v("定期合并这些数据片段")]),e._v("，属于相同分区的数据片段会被合成一个新的片段**。这种数据片段往复合并的特点，也正是合并树名称的由来。")]),e._v(" "),r("p",[e._v("MergeTree作为家族系列最基础的表引擎，主要有以下特点：")]),e._v(" "),r("ul",[r("li",[e._v("存储的数据按照主键排序：允许创建稀疏索引，从而加快查询速度")]),e._v(" "),r("li",[e._v("支持分区，可以通过PRIMARY KEY语句指定分区字段")]),e._v(" "),r("li",[e._v("支持数据副本")]),e._v(" "),r("li",[e._v("支持数据采样")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ENGINE = MergeTree()\n")])])]),r("p",[r("code",[e._v("ORDER BY")]),e._v(" 排序字段必选")]),e._v(" "),r("p",[r("strong",[e._v("在MergeTree中主键并不用于去重，而是用于索引，加快查询速度")])]),e._v(" "),r("h4",{attrs:{id:"replacingmergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replacingmergetree表引擎"}},[e._v("#")]),e._v(" ReplacingMergeTree表引擎")]),e._v(" "),r("p",[e._v("可以针对相同主键进行去重，在"),r("strong",[e._v("合并分区时删除重复的数据")]),e._v("（只是在一定程度上解决了数据重复问题，但是并不能保障数据不重复）")]),e._v(" "),r("p",[r("strong",[e._v("总结：")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("如何判断数据重复")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("ReplacingMergeTree在去除重复数据时，是以ORDER BY排序键为基准的，而不是PRIMARY KEY")])])]),e._v(" "),r("li",[r("p",[e._v("何时删除重复数据")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("在执行分区合并时")])])]),e._v(" "),r("li",[r("p",[e._v("不同分区的重复数据不会被去重")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("ReplacingMergeTree是以分区为单位删除重复数据的，只有在相同数据分区内重复的数据才可以被删除，而不同数据分区之间的重复数据依然不能被剔除")])])]),e._v(" "),r("li",[r("p",[e._v("数据去重的策略")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("如果没有设置 "),r("strong",[e._v("[ver]版本号")]),e._v("，则保留同一组重复数据中的最新插入的数据；如果设置了**[ver]版本号**，则保留同一组重复数据中ver字段取值最大的那一行。")])])]),e._v(" "),r("li",[r("p",[e._v("optimize命令使用")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("一般在数据量比较大的情况，尽量不要使用该命令，在海量数据场景下，执行optimize要消耗大量时间")])])])]),e._v(" "),r("h4",{attrs:{id:"summingmergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summingmergetree表引擎"}},[e._v("#")]),e._v(" SummingMergeTree表引擎")]),e._v(" "),r("p",[e._v("当合并 SummingMergeTree 表的数据片段时，ClickHouse 会把所有"),r("strong",[e._v("具有相同主键的行合并为一行")]),e._v("，该行包含了被合并的行中具有数值数据类型的列的汇总值，即如果存在重复的数据，会对对这些重复的数据进行合并成一条数据，类似于group by的效果。")]),e._v(" "),r("p",[e._v("推荐将该引擎和 MergeTree 一起使用。例如，将完整的数据存储在 MergeTree 表中，并且使用 SummingMergeTree 来存储聚合数据。这种方法可以避免因为使用不正确的主键组合方式而丢失数据。")]),e._v(" "),r("p",[e._v("如果用户只需要查询数据的汇总结果，不关心明细数据，并且数据的汇总条件是预先明确的，即GROUP BY的分组字段是确定的，可以使用该表引擎。")]),e._v(" "),r("p",[e._v("要保证PRIMARY KEY expr指定的主键是ORDER BY expr指定字段的前缀")]),e._v(" "),r("p",[e._v("总结：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("根据什么进行合并")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("用ORBER BY排序键作为聚合数据的条件Key。即如果排序key是相同的，则会合并成一条数据，并对指定的合并字段进行聚合。")])])]),e._v(" "),r("li",[r("p",[e._v("仅对分区内相同排序key的数据进行合并")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("以数据分区为单位来聚合数据，当分区合并时，同一数据分区内聚合key相同的数据会被合并汇总，而不同分区之间的数据则不会被汇总")])])]),e._v(" "),r("li",[r("p",[e._v("如果没有指定聚合字段会怎么聚合")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("按照非主键的数值类型字段进行聚合")])])]),e._v(" "),r("li",[r("p",[e._v("对非汇总字段的数据，该保留哪一条")])]),e._v(" "),r("li",[r("ul",[r("li",[e._v("保留最初的那条数据")])])])]),e._v(" "),r("h4",{attrs:{id:"aggregatingmergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aggregatingmergetree表引擎"}},[e._v("#")]),e._v(" "),r("strong",[e._v("AggregatingMergetree表引擎")])]),e._v(" "),r("p",[e._v("可以使用 AggregatingMergeTree 表来做"),r("strong",[e._v("增量数据统计聚合")]),e._v("。如果要按一组规则来合并减少行数，则使用 AggregatingMergeTree 是合适的。")]),e._v(" "),r("p",[e._v("与SummingMergeTree的区别在于：SummingMergeTree对非主键列进行sum聚合，而AggregatingMergeTree则可以指定各种聚合函数。")]),e._v(" "),r("h4",{attrs:{id:"collapsingmergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#collapsingmergetree表引擎"}},[e._v("#")]),e._v(" "),r("strong",[e._v("CollapsingMergeTree表引擎")])]),e._v(" "),r("p",[e._v("CollapsingMergeTree就是一种通过"),r("strong",[e._v("以增代删的思路，支持行级数据修改和删除")]),e._v("的表引擎。它通过定义一个sign标记位字段，记录数据行的状态。如果sign标记为1，则表示这是一行有效的数据；如果sign标记为-1，则表示这行数据需要被删除。当CollapsingMergeTree分区合并时，同一数据分区内，sign标记为1和-1的一组数据会被抵消删除。")]),e._v(" "),r("p",[e._v("每次需要新增数据时，写入一行sign标记为1的数据；需要删除数据时，则写入一行sign标记为-1的数据。")]),e._v(" "),r("h4",{attrs:{id:"versionedcollapsingmergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#versionedcollapsingmergetree表引擎"}},[e._v("#")]),e._v(" "),r("strong",[e._v("VersionedCollapsingMergeTree表引擎")])]),e._v(" "),r("p",[e._v("VersionedCollapsingMergeTree表引擎的作用与CollapsingMergeTree完全相同，它们的不同之处在于，VersionedCollapsingMergeTree对数据的写入顺序没有要求，在同一个分区内，任意顺序的数据都能够完成折叠操作。")]),e._v(" "),r("p",[e._v("VersionedCollapsingMergeTree使用version列来实现乱序情况下的数据折叠。")]),e._v(" "),r("h4",{attrs:{id:"graphitemergetree表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#graphitemergetree表引擎"}},[e._v("#")]),e._v(" "),r("strong",[e._v("GraphiteMergeTree表引擎")])]),e._v(" "),r("p",[e._v("该引擎用来"),r("strong",[e._v("对 Graphite数据进行’瘦身’及汇总")]),e._v("。对于想使用CH来存储Graphite数据的开发者来说可能有用。")]),e._v(" "),r("p",[e._v("如果不需要对Graphite数据做汇总，那么可以使用任意的CH表引擎；但若需要，那就采用 GraphiteMergeTree 引擎。它能减少存储空间，同时能提高Graphite数据的查询效率。")]),e._v(" "),r("h3",{attrs:{id:"log系列表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log系列表引擎"}},[e._v("#")]),e._v(" Log系列表引擎")]),e._v(" "),r("p",[e._v("主要用于快速写入小表（100w行左右的表），然后全部读出的场景，即一次写入多次查询")]),e._v(" "),r("p",[r("strong",[e._v("Log系列表引擎的特点")])]),e._v(" "),r("ul",[r("li",[e._v("数据存储在磁盘上")]),e._v(" "),r("li",[e._v("当写数据时，将数据追加到文件的末尾")]),e._v(" "),r("li",[e._v("不支持并发读写，当向表中写入数据时，针对这张表的查询会被阻塞，直至写入动作结束")]),e._v(" "),r("li",[e._v("不支持索引")]),e._v(" "),r("li",[e._v("不支持原子写")]),e._v(" "),r("li",[e._v("不支持ALTER操作")])]),e._v(" "),r("p",[r("strong",[e._v("区别")])]),e._v(" "),r("ul",[r("li",[e._v("TinyLog是Log系列引擎"),r("strong",[e._v("功能简单、性能较低的引擎。它的存储结构由数据文件和元数据两部分组成。其中，数据文件是按列")]),e._v("存储的，也就是说每一个列字段都对应一个文件。除此之外，TinyLog不支持并发数据读取。")]),e._v(" "),r("li",[e._v("StripLog支持并发读取数据文件，当读取数据时，ClickHouse会使用多线程进行读取，每个线程处理一个单独的数据块。另外，StripLog将所有列数据存储在同一个文件中，减少了文件的使用数量。")]),e._v(" "),r("li",[e._v("Log支持并发读取数据文件，当读取数据时，ClickHouse会使用多线程进行读取，每个线程处理一个单独的数据块。Log引擎会将每个列数据单独存储在一个文件中。")])]),e._v(" "),r("h4",{attrs:{id:"tinylog表引擎使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tinylog表引擎使用"}},[e._v("#")]),e._v(" TinyLog表引擎使用")]),e._v(" "),r("p",[e._v("该引擎适用于"),r("strong",[e._v("一次写入，多次读取")]),e._v("的场景。对于处理小批数据的中间表可以使用该引擎。值得注意的是，使用大量的小表存储数据，性能会很低。")]),e._v(" "),r("h4",{attrs:{id:"striplog表引擎使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#striplog表引擎使用"}},[e._v("#")]),e._v(" "),r("strong",[e._v("StripLog表引擎使用")])]),e._v(" "),r("p",[e._v("相比TinyLog而言，StripeLog拥有更高的查询性能（拥有.mrk标记文件，支持并行查询），同时其使用了更少的文件描述符（所有数据使用同一个文件保存）。")]),e._v(" "),r("p",[e._v("StripeLog引擎将所有数据都存储在了一个文件中，对于每次的INSERT操作，ClickHouse会将数据块追加到表文件的末尾 StripeLog引擎同样不支持ALTER UPDATE 和ALTER DELETE 操作")]),e._v(" "),r("h4",{attrs:{id:"log表引擎使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log表引擎使用"}},[e._v("#")]),e._v(" Log表引擎使用")]),e._v(" "),r("p",[e._v("Log引擎表适用于临时数据，一次性写入、测试场景。Log引擎结合了TinyLog表引擎和StripeLog表引擎的长处，是Log系列引擎中性能最高的表引擎。")]),e._v(" "),r("p",[e._v("Log表引擎会将每一列都存在一个文件中，对于每一次的INSERT操作，都会对应一个数据块。")]),e._v(" "),r("h3",{attrs:{id:"外部集成表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外部集成表引擎"}},[e._v("#")]),e._v(" 外部集成表引擎")]),e._v(" "),r("p",[e._v("这些表引擎与其他类型的表引擎类似，可以用于"),r("strong",[e._v("将外部数据导入到ClickHouse中，或者在ClickHouse中直接操作外部数据源")]),e._v("。\n例如直接读取HDFS的文件或者MySQL数据库的表。这些表引擎只负责元数据管理和数据查询，而它们自身通常并不负责数据的写入，数据文件直接由外部系统提供。目前ClickHouse提供了下面的外部集成表引擎：")]),e._v(" "),r("ul",[r("li",[e._v("ODBC：通过指定odbc连接读取数据源")]),e._v(" "),r("li",[e._v("JDBC：通过指定jdbc连接读取数据源；")]),e._v(" "),r("li",[e._v("MySQL：将MySQL作为数据存储，直接查询其数据")]),e._v(" "),r("li",[e._v("HDFS：直接读取HDFS上的特定格式的数据文件；")]),e._v(" "),r("li",[e._v("Kafka：将Kafka数据导入ClickHouse")]),e._v(" "),r("li",[e._v("RabbitMQ：与Kafka类似")])]),e._v(" "),r("h3",{attrs:{id:"其他特殊的表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他特殊的表引擎"}},[e._v("#")]),e._v(" 其他特殊的表引擎")]),e._v(" "),r("h4",{attrs:{id:"memory表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#memory表引擎"}},[e._v("#")]),e._v(" Memory表引擎")]),e._v(" "),r("p",[e._v("Memory表引擎直接将数据保存在内存中，数据既不会被压缩也不会被格式转换。当ClickHouse服务重启的时候，Memory表内的数据会全部丢失。一般在测试时使用。")]),e._v(" "),r("h4",{attrs:{id:"distributed表引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distributed表引擎"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Distributed表引擎")])]),e._v(" "),r("p",[e._v("Distributed表引擎是分布式表的代名词，它自身不存储任何数据，数据都分散存储在某一个分片上，能够自动路由数据至集群中的各个节点，所以Distributed表引擎需要和其他数据表引擎一起协同工作。")]),e._v(" "),r("p",[e._v("所以，一张分布式表底层会对应多个本地分片数据表，由具体的分片表存储数据，分布式表与分片表是一对多的关系")]),e._v(" "),r("h2",{attrs:{id:"clickhouse存储"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse存储"}},[e._v("#")]),e._v(" ClickHouse存储")]),e._v(" "),r("h3",{attrs:{id:"列式存储"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#列式存储"}},[e._v("#")]),e._v(" 列式存储")]),e._v(" "),r("p",[e._v("列式数据库更适合OLAP")]),e._v(" "),r("ul",[r("li",[e._v("针对分析类查询，通常只需要读取表的一小部分列")]),e._v(" "),r("li",[e._v("数据总是打包成批量读取的，高压缩比，存储低")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://typora-1304207839.cos.ap-chengdu.myqcloud.com/typora/1648633205887-9a6d1c06-873a-4078-b3b3-69cdc604014b.png",alt:"img"}})]),e._v(" "),r("h3",{attrs:{id:"主键索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主键索引"}},[e._v("#")]),e._v(" 主键索引")]),e._v(" "),r("p",[e._v("ClickHouse支持主键索引，它将每列数据按照index granularity（默认8192行）进行划分，每个index granularity的开头第一行被称为一个mark行。主键索引存储该mark行对应的primary key的值。")]),e._v(" "),r("p",[e._v("对于where条件中含有primary key的查询，通过对主键索引进行二分查找，能够直接定位到对应的index granularity，避免了全表扫描从而加速查询。")]),e._v(" "),r("p",[e._v("ClickHouse的主键索引与MySQL等数据库不同，它并不用于去重，即便primary key相同的行，也可以同时存在于数据库中。")]),e._v(" "),r("h3",{attrs:{id:"数据sharding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据sharding"}},[e._v("#")]),e._v(" 数据sharding")]),e._v(" "),r("ul",[r("li",[e._v("随机分片")]),e._v(" "),r("li",[e._v("固定分片")]),e._v(" "),r("li",[e._v("按列值hash分片")]),e._v(" "),r("li",[e._v("自定义表达式分片")])]),e._v(" "),r("h3",{attrs:{id:"数据partitioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据partitioning"}},[e._v("#")]),e._v(" 数据partitioning")]),e._v(" "),r("p",[e._v("ClickHouse支持PARTITION BY子句，在建表时可以指定按照任意合法表达式进行数据分区操作，比如通过toYYYYMM()将数据按月进行分区、toMonday()将数据按照周几进行分区、对Enum类型的列直接每种取值作为一个分区等。")]),e._v(" "),r("h3",{attrs:{id:"数据ttl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据ttl"}},[e._v("#")]),e._v(" 数据TTL")]),e._v(" "),r("p",[e._v("1）列级别TTL：当一列中的部分数据过期后，会被替换成默认值；当全列数据都过期后，会删除该列。")]),e._v(" "),r("p",[e._v("2）行级别TTL：当某一行过期后，会直接删除该行。")]),e._v(" "),r("p",[e._v("3）分区级别TTL：当分区过期后，会直接删除该分区。")]),e._v(" "),r("h3",{attrs:{id:"有限支持delete、update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有限支持delete、update"}},[e._v("#")]),e._v(" 有限支持delete、update")]),e._v(" "),r("p",[e._v("ClickHouse没有直接支持delete、update操作，而是变相支持了mutation操作，语法为 "),r("strong",[e._v("alter table delete where filter_expr")]),e._v(", "),r("strong",[e._v("alter table update col=val where filter_expr")])]),e._v(" "),r("p",[e._v("目前主要限制为删除、更新操作为异步操作，需要后台compation之后才能生效。")]),e._v(" "),r("h2",{attrs:{id:"clickhouse计算层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse计算层"}},[e._v("#")]),e._v(" ClickHouse计算层")]),e._v(" "),r("h3",{attrs:{id:"多核并行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多核并行"}},[e._v("#")]),e._v(" 多核并行")]),e._v(" "),r("h3",{attrs:{id:"分布式计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式计算"}},[e._v("#")]),e._v(" 分布式计算")]),e._v(" "),r("p",[e._v("ClickHouse会自动将查询拆解为多个task下发到集群中，然后进行多机并行处理，最后把结果汇聚到一起。")]),e._v(" "),r("h3",{attrs:{id:"向量化执行与simd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量化执行与simd"}},[e._v("#")]),e._v(" 向量化执行与SIMD")]),e._v(" "),r("p",[e._v("ClickHouse实现了向量执行引擎（Vectorized execution engine），对内存中的列式数据，一个batch调用一次SIMD指令（而非每一行调用一次），不仅减少了函数调用次数、降低了cache miss，而且可以充分发挥SIMD指令的并行能力，大幅缩短了计算耗时。向量执行引擎，通常能够带来数倍的性能提升。")]),e._v(" "),r("h3",{attrs:{id:"近似计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#近似计算"}},[e._v("#")]),e._v(" 近似计算")]),e._v(" "),r("p",[e._v("近似计算以损失一定结果精度为代价，极大地提升查询性能。在海量数据处理中，近似计算价值更加明显。")]),e._v(" "),r("p",[e._v("ClickHouse实现了多种近似计算功能：")]),e._v(" "),r("ul",[r("li",[e._v("近似估算distinct values、中位数，分位数等多种聚合函数；")]),e._v(" "),r("li",[e._v("建表DDL支持SAMPLE BY子句，支持对于数据进行抽样处理；")])]),e._v(" "),r("h2",{attrs:{id:"客户端开发库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端开发库"}},[e._v("#")]),e._v(" 客户端开发库")]),e._v(" "),r("p",[e._v("https://clickhouse.com/docs/zh/interfaces/third-party/client-libraries")]),e._v(" "),r("h2",{attrs:{id:"可视化界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可视化界面"}},[e._v("#")]),e._v(" 可视化界面")]),e._v(" "),r("h3",{attrs:{id:"tabix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tabix"}},[e._v("#")]),e._v(" Tabix")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://tabix.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tabix官网"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://ui.tabix.io/#!/sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tabix UI"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"houseops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#houseops"}},[e._v("#")]),e._v(" HouseOps")]),e._v(" "),r("h3",{attrs:{id:"灯塔"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#灯塔"}},[e._v("#")]),e._v(" 灯塔")]),e._v(" "),r("h3",{attrs:{id:"dbeaver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver"}},[e._v("#")]),e._v(" DBeaver")]),e._v(" "),r("h3",{attrs:{id:"superset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#superset"}},[e._v("#")]),e._v(" SuperSet")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("参考：")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.aliyun.com/article/762097?spm=5176.20128342.J_6302206100.1.18397ba2vnFChK%E2%80%98",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse深度揭秘（阿里云）"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/topic/61d6739f3f1f5b22d2e6b9a0",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse基础、实践、调优全视角解析（part1-配置篇)"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/topic/61d6f86c3f1f5b22d2e6b9bb",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse基础、实践、调优全视角解析（part2-表引擎介绍)"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/topic/61d6f9643f1f5b22d2e6b9c2",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse基础、实践、调优全视角解析（part3-常见问题篇)"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/topic/61da828d3f1f5b22d2e6ba33",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse基础、实践、调优全视角解析（part4-典型案例-推荐系统实时指标)"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/topic/61da85fe3f1f5b22d2e6ba45",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse基础、实践、调优全视角解析（part5-典型案例-广告投放实时数据)"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.clickhouse.com.cn/topic/61da88293f1f5b22d2e6ba54",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse基础、实践、调优全视角解析（part6-性能奥秘)"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/traditional/p/15218565.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse的基本介绍，什么是ClickHouse？"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000037699772",target:"_blank",rel:"noopener noreferrer"}},[e._v("秒级去重：ClickHouse在腾讯海量游戏营销活动分析中的应用"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000040054934",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据分析引擎黑马ClickHouse最新技术的实践与应用（各公司使用架构）"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://tech.youzan.com/clickhouse-zai-you-zan-de-shi-jian-zhi-lu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickHouse在有赞的实践之路"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://tech.ipalfish.com/blog/2021/06/21/event-analytics-design/",target:"_blank",rel:"noopener noreferrer"}},[e._v("伴鱼事件分析平台：设计篇"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);