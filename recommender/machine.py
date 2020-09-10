import numpy as np
import pandas as pd
from pathlib import Path
from ast import literal_eval
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
import scipy

####
# import re
# import seaborn as sns
# import matplotlib.pyplot as plt


# collaborative filtering
# user-based


# connect to data

# show the dataframe first 5
# print(swipeddata_df.head())

# ## clean up the data
# piv = swipeddata_df.pivot_table(index = ["userid"],columns=["name"],values="swipeddata")
# piv.head()
# piv.shape


# sparse matrix

swipeddata_df = pd.read_csv(
    'data/testuser.csv', usecols=[0, 1, 2], index_col=1)
swipeddata_df.swiped_right = swipeddata_df.swiped_right.apply(literal_eval)
new_df = swipeddata_df.explode("swiped_right")

# create sparse matrix
user_pivot = new_df.pivot(
    index="_id", columns='swiped_right', values='swiped_right').notna()
matrix = scipy.sparse.csr_matrix(user_pivot.values)


# KNN algorithm
knn_recomm = NearestNeighbors(
    n_neighbors=9, algorithm="brute", metric="cosine")
knn_recomm.fit(matrix)

knn_recomm_df = pd.DataFrame(
    knn_recomm, index=new_df.columns, columns=new_df.columns)
#print("!!!!", knn_recomm_df)



# find a recommended user who have 
random_user = np.random.choice(user_pivot.shape[0])
distances, indices = knn_recomm.kneighbors(
    user_pivot.iloc[random_user].values.reshape(1, -1), n_neighbors=9)

print('##', user_pivot.shape[0])
print('###', random_user)

for i in range(0, len(distances.flatten())):
    if i == 0:
        print('Recommendations for user:', random_user)
    else:
        print('{0}: {1}'.format(i, user_pivot.index[indices.flatten()[i]]))




# create cross tabulation userid × restaurantid
#swiped_list = swipeddata_df.sort_values('userid').userid.unique()


# swipeddata_df.sort_values('userid', ascending=False)[:10]
#p = Path(__file__,'dummydata.csv')
