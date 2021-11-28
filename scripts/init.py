#python -i init.py

import numpy as np
from binOct import *
from binIco import *
from numpy import ndarray, sqrt, matmul as mm
from numpy.linalg import inv
from scipy.linalg import det, fractional_matrix_power as mp
from forbiddenfruit import curse

curse(ndarray,'t',property(fget=lambda A: A.conj().T))
curse(ndarray,'i',property(fget=lambda A: inv(A)))

def com(m1,m2):
    return mm(m1,m2)-mm(m2,m1)

def acom(m1,m2):
    return mm(m1,m2)+mm(m2,m1)

def dist(m1,m2):
    return sqrt(det(m1-m2))

s=BinOct(1,2,3)
q=BinIco(1,2,3)