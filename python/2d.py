import numpy as np

A = np.zeros([3,4],dtype='d')

for i in range(A.shape[0]):
  for j in range(A.shape[1]):
    A[i,j] = i + j * A.shape[0]

print A
