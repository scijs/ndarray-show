import numpy as np

A = np.zeros([3,4,5,6],dtype='d')

for i in range(A.shape[0]):
  for j in range(A.shape[1]):
    for k in range(A.shape[2]):
      for l in range(A.shape[3]):
        A[i,j,k,l] = i + j * A.shape[0] + k*A.shape[0]*A.shape[1] + l*A.shape[0]*A.shape[1]*A.shape[2]

print A
