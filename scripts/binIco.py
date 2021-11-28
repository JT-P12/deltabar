from re import S
import numpy as np
from numpy import array, sqrt, matmul as mm
from numpy.linalg import inv
from scipy.linalg import det, fractional_matrix_power as mp

t=(sqrt(5)+1)/2 #golden ratio

class BinIco:
    def __init__ (self,Phi1,Phi2,Phi3):
        #elements are all unitary for phi3 in range (1/(2t), t/2), span is 1/2
        #group often refered to as the icosians
        self.Phi1 = Phi1
        self.Phi2 = Phi2
        self.Phi3 = Phi3
        self.alpha = sqrt(Phi1**2+Phi2**2+Phi3**2)
        self.phi1 = Phi1/self.alpha
        self.phi2 = Phi2/self.alpha
        self.phi3 = Phi3/self.alpha
        self.id = np.identity(2)
        #and two qn (C_10) from distinct families generate the full group 
        self.q1 = array([[t/2 + 1j/2*sqrt(2*self.phi3 - 1/t),                                           (-self.phi1 + 1j*self.phi2)*(t - 1j*sqrt(2*self.phi3 - 1/t))/(2 + 2*self.phi3)],
                        [(self.phi1 + 1j*self.phi2)*(t + 1j*sqrt(2*self.phi3 - 1/t))/(2 + 2*self.phi3), t/2 - 1j/2*sqrt(2*self.phi3 - 1/t)]])
        self.q2 = array([[t/2 + 1j/(2*t)*sqrt(t - 2*self.phi3),                                              (-self.phi1 + 1j*self.phi2)*(1/t**2 + 1j/t*sqrt(t - 2*self.phi3))/(2 - 2*self.phi3)],
                        [(self.phi1 + 1j*self.phi2)*(1/t**2 - 1j/t*sqrt(t - 2*self.phi3))/(2 - 2*self.phi3), t/2 - 1j/(2*t)*sqrt(t - 2*self.phi3)  ]])
        self.q3 = mm(self.q1,inv(self.q2))
        self.q4 = mm(inv(self.q1),self.q2)
        self.q5 = mm(self.q3,self.q4)
        self.q6 = mm(inv(self.q3),inv(self.q4))
        #wn (C_6), vertices of 600-cell contain the vertices of 5 24 cells
        self.w1 = mm(self.q1,self.q2)
        self.w2 = mm(self.q1,self.q3)
        self.w3 = mm(self.q1,inv(self.q4))
        self.w4 = mm(self.q1,self.q5)
        self.w5 = mm(self.q1,self.q6)
        self.w6 = mm(self.q2,inv(self.q3))
        self.w7 = mm(self.q2,self.q4)
        self.w8 = mm(self.q2,self.q5)
        self.w9 = mm(self.q3,inv(self.q6))
        self.w10 = mm(inv(self.q6),self.q4)
        self.t1 = mm(self.w1,self.w2)
        self.t2 = mm(self.w1,self.w7)
        self.t3 = mm(self.w10,inv(self.w1))
        self.t4 = mm(self.w1,self.w3)
        self.t5 = mm(self.w1,self.w8)
        self.t6 = mm(inv(self.w1),inv(self.w3))
        self.t7 = mm(self.w2,self.w8)
        self.t8 = mm(self.w2,self.w5)
        self.t9 = mm(self.w8,self.w2)
        self.t10 = mm(self.w3,self.w4)
        self.t11 = mm(self.w10,inv(self.w3))
        self.t12 = mm(self.w4,self.w3)
        self.t13 = mm(self.w4,self.w7)
        self.t14 = mm(inv(self.w5),inv(self.w4))
        self.t15 = mm(self.w4,self.w9)
        self.elements = [
            self.id, -self.id,
            self.q1, mp(self.q1,2), mp(self.q1,3), -inv(self.q1), -self.q1, -mp(self.q1,2), -mp(self.q1,3), inv(self.q1),
            self.q2, mp(self.q2,2), mp(self.q2,3), -inv(self.q2), -self.q2, -mp(self.q2,2), -mp(self.q2,3), inv(self.q2),
            self.q3, mp(self.q3,2), mp(self.q3,3), -inv(self.q3), -self.q3, -mp(self.q3,2), -mp(self.q3,3), inv(self.q3),
            self.q4, mp(self.q4,2), mp(self.q4,3), -inv(self.q4), -self.q4, -mp(self.q4,2), -mp(self.q4,3), inv(self.q4),
            self.q5, mp(self.q5,2), mp(self.q5,3), -inv(self.q5), -self.q5, -mp(self.q5,2), -mp(self.q5,3), inv(self.q5),
            self.q6, mp(self.q6,2), mp(self.q6,3), -inv(self.q6), -self.q6, -mp(self.q6,2), -mp(self.q6,3), inv(self.q6),
            self.w1,  -inv(self.w1),  -self.w1,  inv(self.w1),
            self.w2,  -inv(self.w2),  -self.w2,  inv(self.w2),
            self.w3,  -inv(self.w3),  -self.w3,  inv(self.w3),
            self.w4,  -inv(self.w4),  -self.w4,  inv(self.w4),
            self.w5,  -inv(self.w5),  -self.w5,  inv(self.w5),
            self.w6,  -inv(self.w6),  -self.w6,  inv(self.w6),
            self.w7,  -inv(self.w7),  -self.w7,  inv(self.w7),
            self.w8,  -inv(self.w8),  -self.w8,  inv(self.w8),
            self.w9,  -inv(self.w9),  -self.w9,  inv(self.w9),
            self.w10, -inv(self.w10), -self.w10, inv(self.w10),
            self.t1,  -self.t1,
            self.t2,  -self.t2, 
            self.t3,  -self.t3, 
            self.t4,  -self.t4, 
            self.t5,  -self.t5, 
            self.t6,  -self.t6, 
            self.t7,  -self.t7, 
            self.t8,  -self.t8, 
            self.t9,  -self.t9, 
            self.t10, -self.t10, 
            self.t11, -self.t11, 
            self.t12, -self.t12, 
            self.t13, -self.t13, 
            self.t14, -self.t14, 
            self.t15, -self.t15, 
        ]
    def getEdges (self):
        self.edges = []
        for i in range (120):
            for j in range(i,120):
                if round(sqrt(np.real(det(self.elements[i]-self.elements[j]))),6) == round(1/t,6): #same number of "edges" length t
                    self.edges.append((i,j))
        return self.edges
    """ def getCells (self): #returns nested list of cells, four members: [cell vertex 1-4]
        self.cells = []
        for i in range(120):
            cell = [i]
            for j in range(i,120):
                if round(sqrt(np.real(det(self.elements[i]-self.elements[j]))),6) == round(t,6):
                    for k in range (j,120):
                        if round(sqrt(np.real(det(self.elements[i]-self.elements[k]))),6) == round(t,6) and round(sqrt(np.real(det(self.elements[j]-self.elements[k]))),6) == round(t,6):
                            for l in range (k,120):
                                if round(sqrt(np.real(det(self.elements[i]-self.elements[l]))),6) == round(t,6) and round(sqrt(np.real(det(self.elements[j]-self.elements[l]))),6) == round(t,6) and round(sqrt(np.real(det(self.elements[k]-self.elements[l]))),6) == round(t,6):
                                    cell = [i,j,k,l]
            self.cells.append(cell)
        return self.cells """