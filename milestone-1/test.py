t = int(input())
for i in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    max_arr = max(arr)
    min_arr = min(arr)
    ans = (max_arr - min_arr) * (n-1)
    print(ans)
