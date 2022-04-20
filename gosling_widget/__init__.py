import sys

from ._version import __version__
from .widget import GoslingWidget

try:
    if "google.colab" in sys.modules:
        from google.colab import output

        output.enable_custom_widget_manager()
except ImportError:
    pass


def _jupyter_labextension_paths():
    return [{"src": "labextension", "dest": "gosling-widget"}]


def _jupyter_nbextension_paths():
    return [
        {
            "section": "notebook",
            "src": "nbextension",
            "dest": "gosling-widget",
            "require": "gosling-widget/extension",
        }
    ]
