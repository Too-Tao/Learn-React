# 报错
> interface name must start with a capitalized I  

在tslint.json中加入 rules
```
"rules": {
    "object-literal-sort-keys": false,
    "interface-name": false,
    "member-access": [true, "no-public"],
    "ordered-imports": false
  }
```
