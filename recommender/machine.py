import numpy as np
import pandas as pd
from pathlib import Path
####
import re
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.neighbors import NearestNeighbors
from scipy.sparse import csr_matrix

print("!!!!!!!")
# collaborative filtering 
## user-based


#  swiped data -- merge -- userdata ----> csv file
###### connect to data
swipeddata_df = pd.read_csv('data/dummydata.csv')
# show the dataframe first 5
print(swipeddata_df.head())


## check the top list
# fig, ax = plt.subplots  #(figsize=[5,10])
# sns.countplot(data=swipeddata_df[swiped_df['swiped_right'].isin(
#     categories['swiped_right'].value_counts().head(25).index)],
#                               y='swiped_right', ax=ax)
# plt.show()


## clean up the data
piv = swipeddata_df.pivot_table(index = ["userid"],columns=["name"],values="swipeddata")
piv.head() 
piv.shape
#Min-Max Scaling
# change NaN to 0
piv_norm = piv.apply(lambda x:(x-np.mean(x))/(np.max(x)-np.min(x)),axis=1)
piv_norm.fillna(0,inplace=True) 

# create cross tabulation userid × restaurantid
swiped_list = swipeddata_df.sort_values('userid').userid.unique()




# swipeddata_df.sort_values('userid', ascending=False)[:10]
#p = Path(__file__,'dummydata.csv')





