import json

# 'r' means read
json_open = open('data/testdata.json', 'r')

input_dict = json.load(json_open)

output_dict = [x for x in input_dict if x['code']["category_code_l"][0]=="RSFST10000"]

output_json = json.dumps(output_dict)
print(len(output_json))