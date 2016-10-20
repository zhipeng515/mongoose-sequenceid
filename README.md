# mongoose-sequenceid
生成mongo数据库唯一ID，使用[flocon](https://github.com/Yosee/flocon)，因为原始版本在最新版本的Node(6.6.0)下编译有问题，实际使用的是
[flonon](https://github.com/zhipeng515/flocon)这个修改版本。

```JS
var sqeuenceId = require('mongoose-sequenceid');
var Schema = require('mongoose').Schema;
var schema = new Schema({
   name: String,
   age: Number
});
schema.plugin(sqeuenceId);
