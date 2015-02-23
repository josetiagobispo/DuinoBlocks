#!/usr/local/bin/python
# -*- coding: utf-8 -*-

class ComponentBlockNotFoundException(object):

    def __init__(self, block):
        self.block = block
    
    def getError(self):
        return 'Componente abaixo nao encontrado'
