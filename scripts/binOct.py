import numpy as np
from numpy import array, sqrt, matmul as mm
from numpy.linalg import inv
from scipy.linalg import det, fractional_matrix_power as mp

class BinOct:
    def __init__ (self,Phi1,Phi2,Phi3):
        self.Phi1 = Phi1
        self.Phi2 = Phi2
        self.Phi3 = Phi3
        self.alpha = sqrt(Phi1**2+Phi2**2+Phi3**2)
        self.phi1 = Phi1/self.alpha
        self.phi2 = Phi2/self.alpha
        self.phi3 = Phi3/self.alpha
        self.s1 = array([ [sqrt(1/2) + sqrt(1 + self.phi3)*1j/2,                (self.phi2 + self.phi1*1j) / (2 *sqrt(1 + self.phi3))],
                        [(-self.phi2 + self.phi1*1j) / (2 * sqrt(1 + self.phi3)), (sqrt(1/2) - sqrt(1+self.phi3)*1j/2)]])
        self.s2 = array([ [sqrt(1/2) - sqrt(1 - self.phi3)*1j/2,                (self.phi2 + self.phi1*1j) / (2 *sqrt(1 - self.phi3))],
                        [(-self.phi2 + self.phi1*1j) / (2 * sqrt(1 - self.phi3)), (sqrt(1/2) + sqrt(1 - self.phi3)*1j/2)]])
        self.s3 = mp(mm(mp(self.s1,2),mp(self.s2,2)),1/2)
        self.z1 = mm(mp(self.s3,2),self.s1)
        self.z2 = mm(self.s1,mp(self.s3,2))
        self.z3 = mm(mp(self.s3,2),self.s2)
        self.z4 = mm(self.s2,mp(self.s3,2))
        self.z5 = mm(mm(self.s1,inv(self.s2)),self.s1)
        self.z6 = mm(mm(self.s2,self.s1),self.s2)
        self.id = np.identity(2)
        self.t1 = mp(self.s1,2)
        self.t2 = mp(self.s2,2)
        self.t3 = mp(self.s3,2)
        self.w1 = mm(self.s1,self.s2)
        self.w2 = mm(self.s1,inv(self.s2))
        self.w3 = mm(self.s2,self.s1)
        self.w4 = mm(inv(self.s2),self.s1) 
        self.elements = [ #first 24 elements are the normal binary tetrahedral subgroup vertices and dual vertices of a 24-cell
            self.id, -self.id,
            self.t1, -self.t1, 
            self.t2, -self.t2,
            self.t3, -self.t3,
            self.w1, -inv(self.w1), -self.w1, inv(self.w1),
            self.w2, -inv(self.w2), -self.w2, inv(self.w2),
            self.w3, -inv(self.w3), -self.w3, inv(self.w3),
            self.w4, -inv(self.w4), -self.w4, inv(self.w4),
            #end of normal subgroup
            self.s1, -inv(self.s1), -self.s1, inv(self.s1),
            self.s2, -inv(self.s2), -self.s2, inv(self.s2),
            self.s3, -inv(self.s3), -self.s3, inv(self.s3),
            self.z1, -self.z1,
            self.z2, -self.z2,
            self.z3, -self.z3,
            self.z4, -self.z4,
            self.z5, -self.z5,
            self.z6, -self.z6,
        ]
    def getEdges (self):
        self.edges = []
        for i in range (48):
            for j in range(i,48):
                if round(np.real(det(self.elements[i]-self.elements[j])),10) == 1.0:
                    self.edges.append((i,j))
        return self.edges
    def getCells (self): #returns nested list of cells, seven members: [dual vertex at cell center, cell vertex 1-6]
        self.cells = []
        for i in range(48):
            cell = [i]
            for j in range(48):
                if round(np.real(det(self.elements[i]-self.elements[j])),8) == round(2-sqrt(2),8):
                    cell+=[j]
            self.cells.append(cell)
        return self.cells

