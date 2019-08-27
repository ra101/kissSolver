let getDimension = [[144, 144], [144, 144], [144, 144], [200, 197], [236, 185], [300, 253], [200, 200], [200, 191], [144, 144], [200, 200], [144, 144], [300, 400], [202, 250], [200, 267], [200, 200], [120, 150], [144, 144], [233, 281], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [236, 314], [200, 200], [200, 200], [200, 200], [200, 145], [200, 171], [200, 258], [209, 241], [300, 294], [200, 200], [200, 251], [200, 200], [200, 200], [200, 200], [200, 200], [144, 144], [300, 303], [200, 200], [150, 150], [150, 150], [200, 200], [200, 200], [200, 200], [200, 200], [200, 200], [200, 200], [200, 181], [300, 383], [144, 144], [200, 200], [200, 280], [120, 150], [98, 110], [110, 150], [144, 144], [122, 157], [122, 140], [110, 147], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [144, 144], [200, 200], [236, 177], [200, 200], [144, 144], [236, 202], [200, 177], [200, 200], [300, 300], [250, 220], [200, 286], [300, 300], [131, 150], [114, 110], [196, 250], [236, 217], [225, 225], [236, 236], [480, 360], [300, 309], [300, 300], [200, 200], [236, 236], [200, 200], [300, 308], [300, 300], [300, 300], [300, 233], [200, 130], [100, 100], [300, 303], [200, 168], [110, 130], [200, 280], [200, 207], [144, 144], [144, 144], [144, 144], [144, 144], [300, 293], [300, 293], [236, 236], [200, 133], [200, 200], [300, 312], [225, 225], [400, 400], [125, 148], [120, 150], [236, 236]]
let tagPossiblity = {'medal': [0, 1, 2, 106], 'gold': [0, 106], 'one': [0, 38, 39, 40], 'first': [0], 'silver': [1], 'two': [1], 'second': [1], 'copper': [2], 'third': [2], 'three': [2], 'turtle': [3, 113], 'turtles': [3], 'four': [3, 113], 'brown shell': [3], 'easily amused': [4], 'amused': [4], 'cat': [4, 6, 30, 73, 76, 80, 93, 102, 112, 116, 120], 'easily': [4], 'angry bird': [5], 'bird': [5, 13, 14, 53, 118], 'red': [5, 37, 41], 'angry': [5, 78, 90], 'white cloud': [5], 'yellow peak': [5], 'couple': [6, 31, 32, 33], 'cat and dog': [6], 'dog': [6, 42, 43, 95, 115], 'red cloak': [7], 'boy': [7, 10, 11, 15, 16, 32, 35, 36, 52, 56, 59, 60, 74, 75, 78, 81, 85, 94, 108, 119], 'black hair': [7, 35, 44, 62, 63, 81], 'arm': [8, 20], 'phone': [8], 'red hat': [9], 'artist': [9], 'emoji': [9, 37, 46, 47, 48, 49, 50, 51, 55, 92, 104], 'emoticon': [9, 37, 46, 47, 48, 49, 50, 51, 55, 92, 104], 'basketball': [10, 11], 'black hat': [11], 'bear': [12, 17, 86], 'bear armour': [12], 'armour': [12], 'brown': [12, 18, 19, 20, 21, 22, 23, 24, 25, 40, 54], 'armor': [12], 'bear armor': [12], 'blue': [13, 14, 50, 53, 96], 'coffee': [13, 48], 'sing': [14], 'black clothes': [15, 52], 'sword': [15, 81], 'cycle': [16], 'bicycle': [16], 'green hat': [17], 'hand': [18, 19, 21, 22, 23, 24, 25, 64, 65, 66, 67, 68, 69, 70, 71], 'down': [18, 65], 'left': [19, 67], 'muscle': [20], 'ok': [21, 68], 'up': [22, 70], 'clap': [23, 64], 'right': [24, 69], 'write': [25, 71], 'hold a carrot': [26], 'carrot': [26, 96, 97], 'bunny': [26, 96, 97], 'rabbit': [26, 96, 97], 'yellow': [26, 31, 59, 64, 65, 66, 67, 68, 69, 70, 71, 89, 90, 118], 'red background': [27], 'burger': [27, 28, 29], 'two layers': [27], 'green flag': [28], 'flag': [28, 114], 'fries': [28], 'drink': [28], 'white background': [29], 'three layers': [29], 'book': [30], 'read': [30], 'glasses': [30, 72, 94], 'pikachu': [31, 89, 90], 'yawn': [31], 'yellow pikachu': [31], 'girl': [32, 34, 44, 45, 57, 58, 61, 62, 63, 83, 84, 98, 99, 117], 'boy black hair': [32, 33], 'girl black skirt': [32], 'girl gray clothes': [32], 'boy black clothes': [33], 'married': [33], 'girl white clothes': [33], 'girl gray hair': [33], 'yellow skirt': [34], 'white hat': [34], 'bag': [35], 'boy in bag': [35], 'injured': [36], 'green hair': [36, 57], 'red tail': [37], 'devil': [37], 'dice': [38, 39, 40, 41], 'white': [38, 97, 100], 'green': [39, 103], 'six': [41], 'bone': [42], 'draw': [42, 82, 105], 'no color': [42, 82, 105], 'flower': [43], 'butterfly': [43], 'blue hair': [44, 84], 'red clothes': [45], 'eat': [46, 49, 55, 96, 112, 120], 'apple': [46], 'beer': [47], 'pizza': [49], 'pillow': [50, 102], 'blue pillow': [50], 'zzz': [50, 102], 'sleep': [50, 102], 'cowboy': [51], 'gun': [51], 'brown hat': [51], 'red scarf': [51], 'black and white': [52, 86, 110], 'fat': [53, 93], 'white belly': [53], 'blue feathers': [53], 'fist': [54, 66], 'fork': [55], 'knife': [55], 'garra': [56], 'no eyebrow': [56], 'red hair': [56], 'pink cloak': [57], 'pink hair': [58, 99], 'yellow hair': [59, 83, 85, 119], 'golf': [60], 'green clothes': [61], 'guitar': [63], 'buuny': [63], 'hange': [72], 'green cloak': [72, 81], 'happy birthday': [73], 'ermmy': [73], 'happy': [73], 'birthday': [73], 'scythe': [74], 'gray hair': [74], 'horse': [75], 'ride': [75], 'iphone love': [76], 'iphone': [76], 'love': [76], 'face': [77], 'black mask': [77], 'cup': [77, 110], 'mask': [77], 'white hair': [77], 'fight me': [78], 'penguin': [79, 87, 88], 'king': [79], 'lazy': [80], "can't move": [80], 'levi': [81], 'lion': [82, 83, 91, 101], 'naruto': [85], 'orange clothes': [85], 'ramen': [85], 'panda': [86], 'fishing': [87], 'ice': [87], 'doll': [88], 'blue scarf': [88], 'scarf': [88], 'candy': [89], 'pout': [90], 'pink': [91], 'cop': [92], 'police': [92], 'whistle': [92], 'not fat': [93], 'poofy': [93], 'running': [94], 'brown fur': [95], 'num': [96], 'tiger': [98, 110, 111], 'rawr': [98], 'yellow slug': [99], 'sheep': [100], 'white fur': [100], 'smile': [101], 'slug': [103], 'baseball': [103], 'base ball': [103], 'bat': [103], 'ball': [103], 'ice cream': [104], 'tutle': [105, 114], 'squirtle': [105], 'stand': [105], 'star': [106], 'cloud': [107], 'sun': [107], 'rain': [107, 109], 'swim': [108], 'could': [109], 'lightning': [109], 'thunder': [109], 'palm': [111], 'above hand': [111], 'turkey': [112], 'pie': [112], 'dolls': [113], 'white flag': [114], 'green shell': [114], 'sit': [115], 'gifts': [116], 'meowy christmas': [116], 'christmas': [116], 'xmas': [116], 'meowy': [116], 'white clothes': [117], 'tail': [117, 119], 'hammer': [118], 'carpenter': [118], 'lumberjack': [118], 'yes': [120], 'chicken': [120], 'food': [120]}