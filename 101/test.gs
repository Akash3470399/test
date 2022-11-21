-- create a function to return nth element of the list
nth.(x :: xs).1 = x
nth.(x :: xs).n = nth.xs.(n-1)

-- create a function to return list up to a number count
listUpTo.(x :: xs).1 = [x]
listUpTo.(x :: xs).n = x :: listUpTo.xs.(n-1)

-- joinlist
joinList.[].y = y
joinList.(x :: xs).y = x :: joinList.xs.y

-- create a function which takes 2 lists of same length & return the sum of multiplication of respective elements
sumProd.[].[] = 0
sumProd.(x :: xs).(y :: ys) = (x * y) + sumProd.xs.ys

-- rotate  list (actual no of rotation = no of rotation % length of list)
rotateList.x.0 = x
rotateList.(x :: xs).n = rotateList.(xs ++ [x]).(n-1) 

-- accept one element & a number then return list of that element repeated given no of times
fillList.e.0 = []
fillList.e.n = e :: fillList.e.(n-1)

-- function for mod %
remainder.x.(y) = if x < y then x else remainder.(x-y).y

-- create a function which takes 2 numbers & returns th list of numbers starating from 1st no till 2nd number
listRange : Int -> Int -> [Int]
listRange.a.1 = [a]
listRange.a.b = a :: listRange.(a + 1).(b - 1)

-- check if list is of even length
isEven.[x] = False
isEven.[] = True
isEven.(x :: y :: xs) = isEven.xs    

-- function takes list of integer & returns middle if length is odd else avg of middle 2 elements if length of list is even
midNum.[x] = x
midNum.[x,y] = (x + y) / 2
midNum.(x :: xs) = midNum.(removeLast.xs)

removeLast.[x] = []
removeLast.(x :: xs) = x :: removeLast.xs 

-- isSorted
isSorted.[x] = True
isSorted.(x :: y :: xs) = if x < y then isSorted.(y :: xs) else False

-- function which takes 2 lists & returns the bigger one
