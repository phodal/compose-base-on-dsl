# DSL-based Composable application

Scene: cross domain

## Usage

Consumer <-> DSL(Protocol) <-> Producer

### Consumer

```golang
compose := NewCompose()
compose.Source("hello").Target("component")
```

### Producer

```
Source("hello")

Target("Component")
```