import numpy as np
import pandas as pd
from pathlib import Path
from ast import literal_eval
####
# import re
# import seaborn as sns
# import matplotlib.pyplot as plt
# from sklearn.neighbors import NearestNeighbors
# from scipy.sparse import csr_matrix


# collaborative filtering 
## user-based

#  swiped data -- merge -- userdata ----> csv file
###### connect to data
swipeddata_df = pd.read_csv('data/dummydata.csv')
# show the dataframe first 5
print(swipeddata_df.head())

# ## clean up the data
# piv = swipeddata_df.pivot_table(index = ["userid"],columns=["name"],values="swipeddata")
# piv.head() 
# piv.shape

## sparse matrix
# rest_list = swipeddata_df.swiped_right
# df = pd.DataFrame(rest_list,
#                   index=[1,2,3,4])
# print(df)

# print(rest_list.swiped_right[0])
swipeddata_df = pd.read_csv('data/dummydata.csv', usecols=[0,2], index_col=0 )
# new_df = swipeddata_df.explode('swiped_right')
# show the dataframe first 5
swipeddata_df.swiped_right = swipeddata_df.swiped_right.apply(literal_eval)
new_df = swipeddata_df.explode("swiped_right")
print(new_df)

user_pivot =  new_df.pivot(columns='userid', values='swiped_right').fillna(0)
print(user_pivot)


#Min-Max Scaling
# change NaN to 0
# piv_norm = piv.apply(lambda x:(x-np.mean(x))/(np.max(x)-np.min(x)),axis=1)
# piv_norm.fillna(0,inplace=True) 

# create cross tabulation userid × restaurantid
swiped_list = swipeddata_df.sort_values('userid').userid.unique()




# swipeddata_df.sort_values('userid', ascending=False)[:10]
#p = Path(__file__,'dummydata.csv')





