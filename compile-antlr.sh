#!/usr/bin/env bash

cd grammar

antlr -Dlanguage=Go -listener ComposeLexer.g4 -o ../libs/go
antlr -Dlanguage=Go -listener ComposeParser.g4 -o ../libs/go
