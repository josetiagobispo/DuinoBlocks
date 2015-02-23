from pyjamas.ui.RootPanel import RootPanelCls
from pyjamas.ui.KeyboardListener import KeyboardHandler
from pyjamas.ui.ClickListener import ClickHandler
from pyjamas.ui.MouseListener import MouseHandler
from pyjamas import DOM
from __pyjamas__ import doc

class RootPanelListener(RootPanelCls, KeyboardHandler, ClickHandler, MouseHandler):
    def __init__(self, *args, **kwargs):
        RootPanelCls.__init__(self, *args, **kwargs)
        ClickHandler.__init__(self)
        KeyboardHandler.__init__(self)
        MouseHandler.__init__(self)
        DOM.setStyleAttribute(doc().body, 'margin', '0px')
    