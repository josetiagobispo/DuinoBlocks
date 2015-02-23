#!/usr/local/bin/python
# -*- coding: utf-8 -*-

class VariableNameNullException(object):

    def __init__(self, block):
        self.block = block
        
    def getError(self):
        return 'Variavel ausente no bloco'
