def selection_sort(xs):
    for i in range(len(xs)-1):
    # find minimum value in unsorted region
        min_index = i
    for j in range(x +1, len(xs)):
    #Update min index if value at j is lower than current min index
        if xs[j] < xs[min_index]:
            min_index = j
    #After finding the minimum value swat the first unsorted value
    xs[i], xs[min_index] = xs[min_index], xs[i]



xs = [3, 2, 1, 5, 4]
print(xs)
selection_sort(xs)
print(xs)

# A nice Pythonic way to check  a list is sorted
# without relying on using Python's own sorting methods to compare.
print(all(xs[i] <= xs[i + 1] for i in range(len(xs) - 1)))
