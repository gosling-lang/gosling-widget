> [!WARNING]
> The `GoslingWidget` is now an [anywidget](https://github.com/manzt/anywidget) and lives in the [`gosling-lang/gos`](https://github.com/gosling-lang/gos) repo.

# gosling-widget

[![PyPI](https://img.shields.io/pypi/v/gosling-widget.svg?color=green)](https://pypi.org/project/gosling-widget)
[![License](https://img.shields.io/pypi/l/gosling.svg?color=green)](https://github.com/manzt/gosling-widget/raw/main/LICENSE)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/gosling-lang/gosling-widget/blob/main/notebooks/Widget.ipynb)


```
pip install gosling-widget
```

### Development

```bash
pip install -e .
```

If you are using the classic Jupyter Notebook you need to install the nbextension:

```bash
jupyter nbextension install --py --symlink --sys-prefix gosling_widget
jupyter nbextension enable --py --sys-prefix gosling_widget
```

Note for developers:

- the `-e` pip option allows one to modify the Python code in-place. Restart the kernel in order to see the changes.
- the `--symlink` argument on Linux or OS X allows one to modify the JavaScript code in-place. This feature is not available with Windows.

For developing with JupyterLab:

```
jupyter labextension develop --overwrite gosling_widget
```


### Release

```bash
npm version [major|minor|patch] # should automatically create git tag "vX.X.X"
git push --follow-tags
```
