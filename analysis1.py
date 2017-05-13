import sys
# from operator import sorted, itemgetter
# import operator
from operator import itemgetter

# read files
a_in = open(sys.argv[1], 'r')
# b_in = open(sys.argv[2], 'r')

# get data
a_data = list()
a_in.readline()
for l in a_in.readlines():
	temp = l.split(' ')
	if temp[2] != 'undefined':
		a_data.append((int(temp[0]), temp[1], float(temp[2]), temp[3]))

# b_data = list()
# b_in.readline()
# for l in b_in.readlines():
# 	temp = l.split(' ')
# 	if temp[2] != 'undefined':
# 		b_data.append((int(temp[0]), temp[1], float(temp[2]), temp[3]))

# sort data
a_data = sorted(a_data, key=itemgetter(0, 1, 2))
# b_data = sorted(b_data, key=itemgetter(0, 1, 2))

# count number of requests
a_num_requests = len(set([i[1] for i in a_data]))
# b_num_requests = len(set([i[1] for i in b_data]))
# print('number of requests in a')
# print(a_num_requests)
# print('number of requests in b')
# print(b_num_requests)

# # get the time delta between beginning and end of a request
# a_delta = dict()
# for d in a_data:
# 	a_delta[d[1]] = list()
# for d in a_data:
# 	a_delta[d[1]].append(d[2])
# temp = list()
# for k, v in a_delta.items():
# 	temp.append((float(k.split('.')[1]), k, v[-1] - v[0]))
# a_delta = sorted(temp, key=itemgetter(0))
# # for i in a_delta:
# #    print('a', i)
#
# b_delta = dict()
# for d in b_data:
# 	b_delta[d[1]] = list()
# for d in b_data:
# 	b_delta[d[1]].append(d[2])
# temp = list()
# for k, v in b_delta.items():
# 	temp.append((float(k.split('.')[1]), k, v[-1] - v[0]))
# b_delta = sorted(temp, key=itemgetter(0))
#
#
# # for i in b_delta:
# #    print('b', i)



# get the average/stdev of the request times
# sync them up










def count_number_of_requests(data):
	return len(set([i[1] for i in data]))


# def printRawData(prefix, data):
# 	for i in data:
# 		print(str(prefix) + str(i))


# def printEachRequestTime(prefix, data):
# 	# print request time and request number and iteration number
# 	temp_helper = list()
# 	for i in data:
# 		temp_helper.append((i[0], (int(i[1].split('.')[0]), int(i[1].split('.')[1])), i[2], i[3]))
#
# 	temp = list()
# 	for i in temp_helper:
# 		temp.append((i[0], i[1][1], i[2], i[3]))
#
# 	# it is supposed to be sorted by 0, 1, 2, but there is overlap between the requestId's and the iteration
# 	d = sorted(temp, key=itemgetter(1, 2, 0))
#
# 	# for n, i in enumerate(d):
# 	# 	print(n, i)  # debug
#
# 	tracker = list()
# 	current = d[0][1]
# 	tracker.append(0)
# 	for n, i in enumerate(d):
# 		if current != i[1]:
# 			tracker.append(n)
# 			current = i[1]
# 	for n, i in enumerate(tracker[:-1]):
# 		print(str(prefix) + str(d[i][0]) + ' ' + str(d[i][1]) + ',' + str(d[tracker[n + 1]][2] - d[tracker[n]][2]))

def eachRequestTime(data):
	# print request time and request number and iteration number
	returned_list = list()
	temp_helper = list()
	for i in data:
		temp_helper.append((i[0], (int(i[1].split('.')[0]), int(i[1].split('.')[1])), i[2], i[3]))

	temp = list()
	for i in temp_helper:
		temp.append((i[0], i[1][1], i[2], i[3]))

	# it is supposed to be sorted by 0, 1, 2, but there is overlap between the requestId's and the iteration
	d = sorted(temp, key=itemgetter(1, 2, 0))

	# for n, i in enumerate(d):
	# 	print(n, i)  # debug

	tracker = list()
	current = d[0][1]
	tracker.append(0)
	for n, i in enumerate(d):
		if current != i[1]:
			tracker.append(n)
			current = i[1]
	for n, i in enumerate(tracker[:-1]):
		returned_list.append((d[i][0], d[i][1], d[tracker[n + 1]][2] - d[tracker[n]][2]))
	return returned_list


#
# def printEachIterationTime(prefix, data):
# 	d = sorted(data, key=itemgetter(0, 2))
#
# 	tracker = list()
# 	current = d[0][0]
# 	tracker.append(0)
# 	for n, i in enumerate(d):
# 		if current != i[0]:
# 			tracker.append(n)
# 			current = i[0]
# 	for n, i in enumerate(tracker[:-1]):
# 		print(str(prefix) + str(n) + ',' + str(d[tracker[n + 1]][2] - d[tracker[n]][2]))


def eachIterationTime(data):
	returned_list = list()
	d = sorted(data, key=itemgetter(0, 2))

	tracker = list()
	current = d[0][0]
	tracker.append(0)
	for n, i in enumerate(d):
		if current != i[0]:
			tracker.append(n)
			current = i[0]
	for n, i in enumerate(tracker[:-1]):
		returned_list.append((n, d[tracker[n + 1]][2] - d[tracker[n]][2]))
	return returned_list



# this will be for the google doc test
def splitDataByTime(time_split, data):
	d = list()
	counter = 0
	for n, i in enumerate(data[:-1]):
		d.append((i[0], i[1], i[2], i[3], counter))
		if data[n+1][2] - data[n][2] > time_split:
			counter += 1
	return d


def printData(prefix, data):
	for i in data:
		print(str(prefix) + str(i))

# printEachIterationTime('a-i:', a_data)
# printEachIterationTime('b-i:', b_data)

# printData('', eachIterationTime(a_data))
# printData('', eachIterationTime(b_data))


# printData('', eachRequestTime(a_data))
# printData('', eachRequestTime(b_data))


#for i in splitDataByTime(1, a_data):
#	print(i)



def iterationDistribution(data):
	d = sorted(data, key=itemgetter(1))
	d = [(n, i[1]) for n, i in enumerate(d)]
	return d


def requestDistribution(data):
	d = sorted(data, key=itemgetter(2))
	d = [(n, i[2]) for n, i in enumerate(d)]
	return d



def iterationStats():
	pass


def requestStats():
	pass




# printData('a', requestDistribution(eachRequestTime(a_data)))
# printData('b', requestDistribution(eachRequestTime(b_data)))



for i in iterationDistribution(eachIterationTime(a_data)):
	print(str(i[0])+','+str(i[1]))

for i in requestDistribution(eachRequestTime(a_data)):
	print(str(i[0])+','+str(i[1]))

