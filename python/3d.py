import numpy as np

A = np.zeros([3,4,5],dtype='d')

for i in range(A.shape[0]):
  for j in range(A.shape[1]):
    for k in range(A.shape[2]):
      A[i,j,k] = i + j * A.shape[0] + k*A.shape[0]*A.shape[1]

print A
