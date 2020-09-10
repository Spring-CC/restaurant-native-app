import numpy as np
import pandas as pd
from pathlib import Path
from ast import literal_eval
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
####
# import re
# import seaborn as sns
# import matplotlib.pyplot as plt
# from sklearn.neighbors import NearestNeighbors
# from scipy.sparse import csr_matrix


# collaborative filtering
# user-based

#  swiped data -- merge -- userdata ----> csv file
# connect to data
swipeddata_df = pd.read_csv('data/dummydata.csv')
# show the dataframe first 5
print(swipeddata_df.head())

# ## clean up the data
# piv = swipeddata_df.pivot_table(index = ["userid"],columns=["name"],values="swipeddata")
# piv.head()
# piv.shape

# sparse matrix

swipeddata_df = pd.read_csv(
    'data/dummydata.csv', usecols=[0, 1, 2], index_col=1)
# show the dataframe first 5
swipeddata_df.swiped_right = swipeddata_df.swiped_right.apply(literal_eval)
new_df = swipeddata_df.explode("swiped_right")
user_pivot = new_df.pivot(
    index="_id", columns='swiped_right', values='swiped_right').notna()
# matrix = scipy.sparse.csr_matrix(new_df.swiped_right)
print(user_pivot)

 
# train knn similarity model
knn_recomm = NearestNeighbors(n_neighbors=9, algorithm='brute', metric='cosine')
print(knn_recomm)
# model_knn = knn_recomm.fit(user_pivot)
# print(model_knn)

# Min-Max Scaling
# change NaN to 0
# piv_norm = piv.apply(lambda x:(x-np.mean(x))/(np.max(x)-np.min(x)),axis=1)
# piv_norm.fillna(0,inplace=True)

# create cross tabulation userid × restaurantid
#swiped_list = swipeddata_df.sort_values('userid').userid.unique()


# swipeddata_df.sort_values('userid', ascending=False)[:10]
#p = Path(__file__,'dummydata.csv')
