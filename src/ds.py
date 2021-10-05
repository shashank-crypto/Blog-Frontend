r , b , g = input().split()

value = 1
greatest = int((int(r)+1)/2)

if (int((int(g)+1)/2) > greatest) :
    value = 2
if (int((int(b)+1)/2) > greatest):
    value = 3
    
time = 30 + ((greatest-1)*3) + value - 1

print(time)