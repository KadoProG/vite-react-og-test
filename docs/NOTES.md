# 開発ノート

## Biome 設定について

`biome.json` の `files.includes` では、以下のファイルを明示的に ignore しています：

- `lefthook.yml`
- `index.html`

これらは現段階では Biome がフォーマット非対応のため、明示的に ignore しています。
