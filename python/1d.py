import numpy as np

A = np.zeros([3],dtype='d')

for i in range(A.shape[0]):
  A[i] = i

print A
