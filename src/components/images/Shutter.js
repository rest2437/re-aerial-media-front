import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const pathVariantsTwo = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

function Shutter() {
  return (
    <div className="shutter-logo">
      <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="2.5vw"
        height="2.5vw"
        viewBox="0 0 1600.000000 1600.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
          fill="#ffffff"
          stroke="none"
        >
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M7825 15890 c-27 -4 -140 -13 -250 -19 -213 -12 -382 -26 -480 -41
-33 -5 -112 -14 -175 -20 -63 -6 -131 -16 -151 -21 -20 -5 -54 -9 -76 -9 -21
0 -43 -4 -48 -9 -6 -5 -28 -11 -50 -14 -22 -3 -62 -10 -90 -16 -63 -14 -148
-29 -200 -37 -22 -3 -49 -9 -60 -14 -11 -5 -31 -11 -45 -13 -101 -20 -507
-132 -568 -158 -13 -5 -34 -9 -47 -9 -13 0 -27 -4 -30 -10 -3 -5 -15 -10 -26
-10 -10 0 -27 -4 -37 -9 -31 -16 -66 -29 -132 -51 -36 -12 -74 -25 -85 -30
-11 -5 -81 -32 -155 -60 -74 -29 -160 -63 -190 -77 -51 -23 -71 -32 -125 -54
-67 -27 -418 -199 -495 -241 -25 -14 -74 -41 -110 -60 -155 -84 -327 -186
-437 -260 -40 -26 -76 -48 -82 -48 -5 0 -11 -3 -13 -8 -1 -4 -43 -34 -93 -67
-49 -32 -92 -62 -95 -65 -3 -4 -32 -25 -65 -48 -115 -80 -296 -216 -342 -256
-15 -14 -62 -52 -103 -86 -76 -62 -160 -134 -209 -180 -15 -14 -72 -65 -126
-115 -151 -138 -298 -287 -525 -535 -50 -55 -120 -137 -180 -210 -34 -41 -71
-86 -83 -100 -21 -24 -119 -152 -161 -209 -70 -96 -102 -136 -108 -139 -5 -2
-8 -9 -8 -16 0 -7 -9 -22 -20 -34 -16 -17 -106 -147 -145 -210 -5 -9 -36 -56
-67 -103 -32 -48 -66 -102 -77 -121 -10 -18 -45 -78 -77 -133 -32 -55 -74
-131 -94 -170 -20 -38 -47 -88 -60 -110 -39 -68 -204 -404 -240 -490 -18 -43
-39 -92 -58 -135 -42 -95 -142 -357 -142 -371 0 -8 -4 -19 -8 -24 -4 -6 -14
-28 -21 -50 -13 -42 -27 -78 -42 -107 -5 -10 -9 -27 -9 -37 0 -11 -5 -23 -10
-26 -6 -3 -10 -16 -10 -27 0 -12 -8 -47 -19 -77 -41 -123 -128 -441 -148 -541
-2 -14 -8 -34 -13 -45 -5 -11 -11 -38 -14 -60 -5 -41 -20 -125 -37 -205 -10
-43 -19 -89 -39 -195 -10 -49 -19 -115 -40 -305 -29 -250 -29 -255 -62 -685
-7 -88 -12 -232 -11 -320 1 -220 32 -656 63 -890 5 -38 14 -117 20 -175 6 -58
13 -118 16 -135 2 -16 7 -50 10 -75 3 -25 9 -54 14 -65 5 -11 11 -36 14 -55 5
-33 11 -63 35 -187 6 -29 15 -74 20 -100 33 -162 149 -591 182 -671 5 -13 9
-34 9 -47 0 -13 5 -27 10 -30 5 -3 10 -15 10 -26 0 -10 4 -27 9 -37 16 -31 30
-66 51 -132 23 -69 23 -69 63 -170 15 -36 38 -96 52 -135 14 -38 37 -95 52
-125 14 -30 29 -65 34 -77 23 -58 32 -79 42 -98 21 -41 26 -52 57 -120 43 -93
144 -299 150 -305 3 -3 22 -39 44 -80 21 -41 53 -100 71 -130 18 -30 59 -100
91 -155 69 -118 299 -470 325 -499 11 -11 19 -25 19 -32 0 -7 3 -14 8 -16 4
-1 29 -32 55 -68 60 -81 119 -159 132 -174 6 -6 22 -27 35 -46 13 -19 27 -37
30 -40 3 -3 41 -48 83 -100 43 -52 96 -114 118 -138 21 -23 39 -45 39 -48 0
-2 15 -20 33 -38 17 -19 82 -87 142 -152 150 -160 230 -240 370 -369 65 -60
133 -125 151 -143 18 -17 37 -32 41 -32 4 0 23 -16 43 -35 19 -19 71 -64 115
-100 44 -36 91 -76 105 -88 14 -12 41 -33 60 -47 37 -26 52 -38 104 -81 17
-14 47 -36 66 -49 19 -13 37 -27 40 -30 3 -4 34 -26 70 -50 36 -24 67 -46 70
-50 7 -9 389 -260 396 -260 3 0 25 -13 49 -30 24 -16 46 -30 48 -30 3 0 40
-20 81 -45 42 -25 81 -45 85 -45 5 0 11 -3 13 -7 2 -5 21 -18 43 -29 22 -12
60 -32 85 -45 25 -13 47 -26 50 -30 3 -3 23 -13 45 -23 22 -10 67 -32 100 -48
33 -17 67 -34 75 -39 8 -4 65 -30 125 -59 105 -49 126 -58 178 -79 12 -5 52
-23 89 -40 37 -17 70 -31 73 -31 6 0 117 -43 260 -99 11 -5 38 -14 60 -20 22
-7 50 -17 63 -22 12 -5 34 -14 50 -20 15 -6 35 -15 44 -20 10 -5 27 -9 37 -9
11 0 23 -5 26 -10 3 -6 16 -10 27 -10 12 0 47 -8 77 -19 130 -44 473 -136 549
-148 18 -3 35 -9 38 -14 3 -5 20 -9 37 -9 18 0 64 -7 102 -16 39 -9 93 -20
120 -25 28 -5 73 -14 100 -20 96 -19 160 -30 235 -39 403 -48 414 -49 865 -82
213 -16 374 -16 585 0 379 28 439 33 530 43 118 13 229 25 340 39 47 6 105 13
130 16 25 3 54 9 65 14 11 5 36 11 55 14 33 5 69 12 185 35 28 6 70 13 95 16
25 4 54 10 65 15 11 5 34 11 50 15 17 3 46 10 65 15 19 5 87 22 150 38 118 30
307 86 348 103 13 5 34 9 47 9 13 0 27 5 30 10 3 5 15 10 26 10 10 0 27 4 37
9 30 15 66 30 112 45 48 16 146 52 300 111 95 37 125 49 210 87 25 11 54 24
65 28 42 17 553 272 616 308 36 20 97 54 135 76 38 21 93 54 121 72 29 19 57
34 63 34 5 0 10 5 10 10 0 6 4 10 9 10 11 0 327 206 354 231 9 8 30 22 45 30
15 8 33 20 40 27 8 6 44 33 80 59 37 26 81 58 98 72 54 45 68 56 104 81 19 13
37 27 40 30 3 3 59 50 125 105 66 54 127 107 136 117 9 10 20 18 23 18 4 0 24
17 44 37 21 21 86 83 145 137 135 124 234 222 362 361 55 59 119 128 143 151
23 24 42 46 42 50 0 3 12 18 28 32 15 15 43 47 62 72 19 25 50 63 69 86 73 84
116 136 125 151 8 15 16 26 67 87 14 17 46 61 72 98 26 36 53 72 59 80 7 7 19
25 27 40 8 16 18 28 23 28 4 0 8 6 8 14 0 8 3 16 8 18 10 4 222 327 222 338 0
6 5 10 10 10 6 0 10 5 10 11 0 6 13 29 28 52 16 23 51 82 78 130 27 49 61 110
75 135 83 148 148 275 248 487 53 111 66 140 84 185 17 43 32 75 37 80 3 3 16
37 29 75 13 39 39 106 57 150 18 44 47 121 64 170 32 92 46 127 61 157 5 10 9
27 9 37 0 11 5 23 10 26 5 3 10 17 10 30 0 13 4 34 9 47 19 44 71 224 112 383
53 207 56 222 80 340 36 178 40 199 45 235 3 19 9 44 14 55 5 11 11 40 14 65
3 25 10 81 15 125 11 91 29 247 41 350 7 67 17 182 42 510 15 199 15 394 0
595 -30 413 -43 569 -52 620 -5 30 -14 105 -20 165 -6 61 -15 133 -20 160 -5
28 -12 66 -15 85 -6 34 -16 89 -35 180 -25 122 -30 148 -35 190 -4 25 -10 54
-15 65 -5 11 -11 31 -13 45 -19 95 -108 423 -148 541 -11 30 -19 65 -19 77 0
11 -4 24 -10 27 -5 3 -10 16 -10 29 0 12 -4 26 -9 31 -5 6 -18 39 -30 75 -12
36 -26 73 -31 82 -6 10 -10 23 -10 30 0 14 -110 296 -147 378 -14 30 -29 64
-33 75 -20 53 -114 255 -168 360 -39 76 -43 86 -63 130 -8 17 -16 32 -19 35
-5 5 -18 27 -73 130 -54 101 -146 260 -167 290 -11 16 -20 31 -20 34 0 7 -231
359 -240 366 -3 3 -26 34 -50 70 -24 36 -47 67 -52 68 -4 2 -8 10 -8 18 0 8
-4 14 -8 14 -4 0 -15 13 -25 29 -9 16 -32 47 -50 68 -17 22 -43 55 -57 73 -34
46 -153 194 -160 200 -3 3 -24 27 -45 55 -22 27 -49 60 -60 72 -11 12 -49 54
-85 93 -111 124 -128 141 -275 290 -78 80 -182 181 -230 225 -48 44 -107 99
-131 123 -24 23 -46 42 -49 42 -3 0 -21 15 -39 33 -18 17 -77 68 -131 112 -54
44 -109 90 -121 103 -13 12 -27 22 -32 22 -4 0 -17 8 -28 18 -17 15 -78 63
-184 142 -19 14 -57 41 -85 60 -27 19 -52 37 -55 40 -5 6 -158 109 -287 193
-40 26 -77 47 -83 47 -5 0 -10 5 -10 10 0 6 -5 10 -11 10 -6 0 -29 13 -52 28
-40 28 -158 96 -262 152 -27 15 -77 42 -110 60 -79 43 -243 125 -380 189 -105
50 -126 60 -177 80 -13 5 -48 20 -78 34 -62 29 -329 132 -435 168 -38 13 -71
27 -73 31 -2 5 -12 8 -23 8 -11 0 -27 4 -37 9 -9 5 -37 14 -62 21 -25 7 -53
16 -62 21 -10 5 -24 9 -32 9 -7 0 -54 13 -104 30 -83 27 -207 60 -397 105 -38
10 -79 21 -90 25 -11 5 -40 11 -65 15 -25 3 -65 10 -90 14 -25 5 -63 12 -85
16 -22 4 -49 10 -60 15 -11 5 -38 11 -60 14 -22 3 -65 10 -95 15 -91 17 -111
19 -220 31 -58 6 -132 15 -165 20 -254 38 -979 78 -1090 60z m640 -601 c218
-13 336 -25 555 -58 36 -6 83 -13 105 -16 217 -30 222 -31 435 -79 36 -8 110
-24 165 -36 55 -12 111 -25 125 -29 31 -11 150 -45 210 -62 113 -31 453 -146
555 -189 11 -4 36 -13 55 -20 57 -20 73 -26 118 -49 24 -11 50 -21 58 -21 8 0
14 -4 14 -10 0 -5 8 -10 19 -10 28 0 405 -180 526 -251 45 -26 112 -59 121
-59 2 0 28 -16 58 -35 30 -19 57 -35 60 -35 2 0 42 -23 88 -52 46 -28 93 -56
105 -62 13 -6 23 -14 23 -18 0 -5 4 -8 10 -8 8 0 242 -151 275 -178 6 -4 26
-19 45 -32 19 -13 43 -32 53 -41 9 -9 30 -22 45 -30 15 -8 29 -17 32 -20 3 -3
57 -45 120 -93 63 -47 128 -99 145 -114 16 -15 47 -39 67 -54 20 -15 42 -33
50 -40 7 -7 31 -28 53 -47 222 -189 640 -607 791 -791 16 -19 31 -37 34 -40 3
-3 22 -26 43 -52 21 -26 44 -53 51 -60 7 -7 51 -65 99 -128 48 -63 94 -124
103 -135 8 -11 23 -32 32 -47 9 -16 20 -28 24 -28 4 0 8 -6 8 -14 0 -8 4 -16
9 -18 5 -2 61 -82 125 -178 64 -96 121 -180 126 -187 6 -7 10 -19 10 -28 0 -8
4 -15 8 -15 5 0 15 -12 23 -27 8 -16 16 -30 20 -33 15 -14 234 -412 269 -490
4 -8 20 -42 37 -75 48 -93 143 -302 143 -313 0 -6 9 -27 19 -49 33 -66 43 -90
134 -328 19 -49 45 -126 57 -170 13 -44 26 -84 30 -90 3 -5 12 -30 19 -55 7
-25 17 -53 22 -62 5 -10 9 -29 9 -42 0 -14 5 -28 10 -31 6 -3 10 -19 10 -36 0
-16 4 -37 9 -47 11 -21 46 -140 60 -202 13 -62 27 -123 46 -203 34 -144 58
-273 76 -412 6 -44 15 -107 20 -140 50 -310 70 -595 70 -1010 0 -416 -20 -708
-70 -1020 -5 -33 -14 -96 -20 -140 -16 -122 -28 -189 -57 -320 -14 -66 -30
-140 -35 -165 -24 -119 -67 -280 -89 -335 -9 -21 -18 -60 -27 -113 -3 -18 -9
-35 -14 -38 -5 -3 -9 -14 -9 -25 0 -10 -4 -27 -9 -37 -5 -9 -24 -64 -42 -122
-28 -90 -81 -238 -109 -305 -4 -11 -13 -36 -20 -55 -13 -37 -40 -100 -71 -163
-11 -22 -19 -43 -19 -49 0 -10 -96 -221 -143 -313 -42 -83 -52 -104 -73 -150
-10 -22 -20 -42 -23 -45 -8 -6 -25 -37 -70 -124 -59 -113 -134 -241 -143 -244
-4 -2 -8 -8 -8 -14 0 -5 -13 -29 -30 -53 -16 -24 -30 -48 -30 -54 0 -6 -4 -11
-10 -11 -5 0 -10 -5 -10 -10 0 -6 -34 -61 -75 -123 -113 -170 -139 -206 -147
-207 -5 0 -8 -4 -8 -10 0 -5 -6 -18 -14 -27 -8 -10 -65 -85 -126 -167 -61 -82
-125 -162 -141 -177 -16 -15 -29 -30 -29 -33 0 -7 -70 -91 -169 -205 -71 -81
-528 -538 -612 -612 -36 -31 -103 -88 -149 -125 -47 -38 -92 -76 -100 -84 -8
-9 -67 -55 -130 -103 -63 -47 -124 -95 -135 -104 -11 -10 -32 -24 -47 -32 -15
-8 -36 -21 -45 -30 -28 -25 -94 -74 -130 -96 -17 -11 -70 -46 -117 -78 -47
-31 -88 -57 -91 -57 -4 0 -33 -18 -65 -40 -32 -22 -63 -40 -69 -40 -5 0 -11
-4 -13 -8 -1 -5 -34 -26 -73 -47 -38 -21 -81 -46 -95 -55 -14 -9 -63 -37 -110
-61 -47 -23 -87 -46 -90 -49 -6 -7 -317 -160 -324 -160 -3 0 -42 -18 -87 -40
-45 -22 -87 -40 -94 -40 -7 0 -41 -14 -76 -31 -67 -33 -82 -39 -139 -59 -19
-7 -44 -16 -55 -20 -103 -43 -448 -160 -560 -189 -69 -19 -121 -34 -140 -41
-31 -12 -91 -27 -195 -51 -390 -86 -387 -86 -480 -98 -113 -16 -149 -21 -220
-32 -350 -53 -601 -70 -1030 -70 -413 1 -705 21 -1010 71 -36 6 -99 15 -140
20 -131 16 -223 34 -470 90 -19 4 -60 13 -90 20 -30 7 -73 16 -95 22 -22 5
-52 12 -68 15 -15 3 -30 9 -33 14 -3 5 -16 9 -29 9 -13 0 -26 4 -29 9 -3 5
-20 11 -38 14 -53 9 -92 18 -113 27 -11 4 -40 14 -65 21 -25 7 -49 15 -55 19
-5 4 -28 12 -50 18 -115 34 -223 71 -320 112 -11 4 -40 16 -65 25 -52 19 -107
43 -132 56 -10 5 -25 9 -33 9 -8 0 -15 5 -15 10 0 6 -7 10 -15 10 -8 0 -23 4
-33 9 -9 5 -64 30 -122 56 -115 51 -108 48 -200 94 -36 18 -81 41 -100 51 -19
9 -53 27 -75 40 -22 12 -71 39 -110 59 -82 43 -238 132 -245 140 -3 4 -17 12
-32 20 -16 8 -28 18 -28 23 0 4 -9 8 -20 8 -11 0 -20 5 -20 10 0 6 -5 10 -11
10 -10 0 -377 245 -389 260 -3 3 -21 17 -40 30 -19 14 -39 28 -45 32 -5 5 -62
47 -125 95 -63 47 -122 94 -130 102 -8 9 -35 32 -60 51 -124 94 -495 441 -635
593 -49 54 -112 122 -139 150 -26 29 -92 104 -144 167 -53 63 -99 117 -103
120 -3 3 -50 64 -105 135 -54 72 -102 132 -106 133 -4 2 -8 9 -8 15 0 7 -10
23 -21 37 -42 53 -269 389 -269 399 0 6 -4 11 -10 11 -5 0 -10 5 -10 11 0 6
-13 30 -30 54 -16 24 -30 48 -30 53 0 6 -3 12 -7 14 -5 2 -21 28 -37 58 -16
30 -41 73 -56 95 -14 22 -32 56 -40 75 -7 19 -22 47 -32 62 -10 14 -18 31 -18
36 0 6 -3 12 -7 14 -17 7 -243 484 -243 512 0 9 -4 16 -10 16 -5 0 -10 6 -10
13 0 8 -6 27 -14 43 -21 44 -42 95 -56 134 -7 19 -16 44 -20 55 -32 75 -83
220 -119 335 -24 74 -47 144 -51 155 -4 11 -13 40 -20 65 -13 52 -49 174 -61
210 -4 14 -17 70 -29 125 -12 55 -32 150 -46 210 -37 164 -42 193 -53 275 -16
113 -21 149 -32 220 -17 117 -29 203 -39 295 -42 399 -42 1053 1 1460 5 50 12
117 15 150 2 33 9 69 14 80 5 11 11 43 14 70 16 156 34 268 72 440 14 66 28
131 31 145 20 104 52 231 83 330 10 30 22 73 28 95 25 95 36 131 44 140 4 5 8
16 8 26 0 9 9 38 19 65 10 27 25 69 32 94 11 39 65 187 89 245 4 11 13 36 20
55 13 37 40 100 71 163 11 22 19 43 19 49 0 13 134 306 174 378 7 14 23 44 35
68 43 86 66 127 73 130 5 2 8 9 8 16 0 7 30 64 66 127 37 62 75 130 86 149 11
19 29 47 39 62 11 14 19 31 19 37 0 6 5 11 10 11 6 0 10 7 10 15 0 8 5 15 10
15 6 0 10 5 10 12 0 6 10 25 23 42 13 17 38 56 56 86 19 30 36 57 40 60 3 3
26 34 51 70 24 36 48 67 52 68 4 2 8 8 8 13 0 5 6 17 14 26 8 10 58 77 111
148 53 72 111 146 129 165 17 19 45 53 61 75 30 40 42 55 194 225 108 121 428
440 551 550 52 47 115 103 140 125 25 23 63 54 85 70 22 16 56 44 75 61 30 27
150 119 246 189 15 11 33 26 40 33 7 6 17 12 21 12 5 0 18 8 29 18 10 10 48
38 84 62 36 24 70 48 75 52 28 23 207 138 215 138 6 0 10 4 10 9 0 5 8 11 18
14 18 6 73 38 82 47 7 8 222 131 310 177 41 22 92 50 113 61 21 12 42 22 47
22 5 0 31 13 57 28 26 15 71 38 98 49 28 12 94 42 147 67 53 25 101 46 105 46
4 0 40 16 80 35 40 19 105 46 146 59 40 14 85 32 100 39 15 8 73 29 130 47 96
31 186 62 232 80 34 13 88 28 145 40 30 7 64 16 75 20 52 20 119 40 210 60 28
6 66 15 85 20 226 55 459 97 645 116 28 3 59 9 70 14 11 5 52 12 90 15 39 3
108 10 155 15 344 36 764 43 1185 19z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M7720 14600 c-212 -9 -317 -21 -745 -80 -149 -21 -210 -33 -365 -70
-25 -6 -67 -14 -95 -20 -54 -10 -107 -22 -170 -40 -22 -6 -56 -15 -75 -20 -19
-5 -69 -18 -110 -30 -41 -12 -91 -26 -110 -30 -19 -4 -90 -27 -157 -49 -68
-23 -130 -41 -138 -41 -8 0 -23 -4 -33 -9 -9 -5 -28 -13 -42 -18 -14 -6 -36
-15 -50 -21 -14 -6 -54 -20 -90 -32 -68 -22 -77 -26 -150 -58 -25 -10 -62 -25
-82 -33 -21 -7 -38 -16 -38 -19 0 -3 12 -13 28 -22 15 -9 40 -28 56 -41 16
-14 41 -31 55 -39 14 -7 32 -19 39 -25 7 -7 17 -13 22 -13 5 0 15 -6 22 -13
11 -11 90 -65 177 -122 8 -5 21 -15 28 -22 7 -6 22 -15 33 -18 11 -3 20 -11
20 -16 0 -5 4 -9 10 -9 9 0 35 -19 65 -47 8 -7 17 -13 20 -13 7 0 188 -121
285 -190 30 -21 61 -39 68 -40 6 0 12 -3 12 -7 0 -5 21 -21 48 -38 26 -16 90
-60 143 -97 54 -38 102 -68 107 -68 6 0 12 -4 14 -8 2 -5 53 -41 113 -82 61
-40 126 -84 145 -97 19 -14 100 -69 180 -122 80 -53 169 -114 197 -134 29 -20
57 -37 63 -37 5 0 10 -3 10 -8 0 -4 18 -18 40 -32 22 -14 40 -28 40 -32 0 -5
5 -8 11 -8 9 0 110 -67 554 -369 77 -52 142 -98 143 -103 2 -4 8 -8 13 -8 6 0
37 -19 71 -42 33 -24 68 -47 77 -53 32 -20 266 -179 271 -184 3 -3 17 -12 33
-20 15 -8 27 -18 27 -23 0 -4 5 -8 12 -8 6 0 29 -14 52 -30 23 -17 93 -65 156
-107 63 -42 124 -85 134 -95 11 -10 25 -18 32 -18 7 0 14 -4 16 -8 2 -4 17
-17 34 -27 71 -45 209 -138 214 -144 3 -4 25 -19 50 -33 25 -14 65 -42 90 -62
25 -20 48 -36 52 -36 8 0 108 -68 118 -80 3 -3 25 -18 50 -32 25 -14 58 -37
74 -51 16 -14 41 -31 55 -39 14 -7 28 -16 31 -19 3 -3 73 -50 155 -105 83 -54
152 -101 155 -105 3 -3 39 -28 80 -55 168 -111 546 -368 564 -383 18 -15 18
-14 13 19 -3 19 -10 55 -15 80 -16 75 -42 218 -63 340 -22 126 -36 201 -50
270 -15 69 -28 139 -39 205 -15 95 -28 166 -40 220 -6 28 -15 70 -19 95 -22
114 -52 280 -61 335 -5 33 -17 94 -25 135 -25 118 -53 272 -65 360 -5 36 -14
86 -20 113 -27 123 -31 145 -40 187 -9 49 -26 144 -40 230 -10 58 -23 125 -39
200 -13 64 -26 134 -55 300 -14 80 -35 192 -47 250 -22 109 -34 173 -49 275
-5 33 -14 84 -20 113 -5 28 -14 73 -19 100 -14 81 -13 80 -146 123 -22 7 -44
17 -49 21 -6 4 -20 8 -32 8 -13 0 -26 5 -29 10 -3 6 -17 10 -30 10 -13 0 -27
5 -30 10 -3 6 -19 10 -35 10 -16 0 -31 4 -34 9 -3 5 -23 11 -43 14 -21 3 -57
10 -80 16 -24 6 -60 15 -80 21 -92 23 -136 32 -253 50 -514 81 -864 101 -1380
80z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M10363 14145 c8 -53 19 -112 52 -275 34 -167 49 -254 71 -415 4 -22
10 -44 15 -49 5 -6 9 -27 9 -47 0 -21 4 -40 9 -43 4 -3 11 -27 14 -53 4 -27
11 -73 17 -103 6 -30 15 -82 20 -115 5 -33 13 -80 18 -105 31 -148 71 -351 77
-390 8 -58 70 -378 82 -425 2 -11 8 -49 13 -85 9 -65 20 -126 39 -210 19 -83
39 -188 62 -325 13 -75 26 -141 34 -180 18 -82 49 -242 67 -350 11 -66 24
-140 29 -165 26 -118 42 -202 60 -310 21 -125 28 -165 38 -212 6 -27 15 -67
20 -90 11 -53 49 -255 60 -323 5 -27 21 -111 36 -185 29 -142 40 -206 55 -305
5 -33 14 -82 20 -110 6 -27 15 -70 20 -95 5 -25 14 -67 19 -95 11 -52 26 -132
41 -225 5 -30 14 -76 20 -102 15 -71 24 -117 54 -278 26 -141 59 -319 77 -410
18 -90 31 -166 38 -217 6 -49 16 -72 25 -62 2 2 52 75 112 163 99 143 158 229
294 426 25 36 48 67 53 68 4 2 7 9 7 14 0 6 17 34 39 62 21 28 78 110 126 181
49 72 92 132 95 135 3 3 50 70 105 150 132 195 139 204 148 208 4 2 7 9 7 16
0 7 8 21 18 32 15 16 213 299 247 352 6 9 18 25 28 36 9 11 17 25 17 32 0 7 4
14 9 16 5 2 33 39 62 84 30 44 79 116 109 158 30 43 64 93 75 111 12 19 28 42
36 52 9 10 60 83 115 163 54 80 101 147 104 150 4 3 29 39 57 80 106 160 207
305 215 308 4 2 8 10 8 17 0 7 4 15 8 17 9 4 162 225 162 235 0 11 -158 325
-190 378 -17 28 -33 57 -37 65 -4 8 -24 41 -45 72 -21 31 -38 59 -38 61 0 6
-124 189 -168 247 -19 25 -43 58 -55 75 -32 43 -211 265 -242 300 -14 17 -48
54 -73 84 -121 141 -398 418 -541 541 -29 25 -65 56 -80 70 -16 14 -48 41 -72
62 -24 20 -54 44 -66 55 -73 62 -292 226 -434 326 -77 54 -332 222 -349 230
-8 4 -37 20 -65 37 -27 17 -72 43 -98 58 -27 15 -74 42 -105 61 -53 32 -138
77 -242 131 -25 12 -54 27 -65 33 -105 55 -346 168 -420 197 -33 13 -66 28
-74 34 -11 9 -13 4 -8 -29z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M4800 13838 c-53 -22 -256 -123 -280 -139 -14 -9 -54 -32 -90 -50
-36 -19 -81 -46 -100 -60 -19 -15 -57 -39 -85 -55 -27 -15 -73 -45 -101 -66
-28 -21 -55 -38 -60 -38 -5 0 -26 -15 -46 -33 -20 -17 -60 -48 -88 -67 -28
-19 -57 -40 -63 -45 -7 -6 -34 -28 -62 -50 -49 -38 -64 -51 -176 -145 -210
-177 -550 -514 -685 -680 -16 -19 -40 -46 -54 -60 -14 -14 -37 -41 -52 -62
-15 -20 -33 -42 -40 -50 -21 -22 -99 -124 -201 -262 -12 -16 -27 -34 -33 -40
-5 -6 -42 -58 -80 -116 -38 -58 -85 -125 -103 -150 -18 -25 -36 -52 -39 -60
-3 -8 -22 -40 -43 -70 -43 -65 -123 -198 -190 -317 -12 -21 -25 -42 -29 -48
-25 -32 -282 -543 -331 -660 -5 -11 -20 -46 -34 -79 l-25 -58 23 5 c183 39
396 79 450 84 37 3 70 10 73 14 3 5 25 9 49 9 24 0 47 5 50 10 3 6 24 10 45
10 21 0 41 4 44 9 3 4 27 11 53 15 27 3 75 10 108 16 33 6 85 15 115 20 30 5
76 14 103 20 26 5 66 14 90 19 55 11 302 57 347 64 38 7 179 34 250 48 56 12
137 27 215 39 75 13 146 26 208 40 96 21 134 28 227 44 52 9 106 19 120 22 14
3 45 9 70 13 25 5 106 21 180 35 134 27 343 64 410 73 19 2 44 8 55 13 11 5
36 11 55 14 19 3 60 10 90 16 66 13 147 26 215 35 28 4 59 10 70 15 11 5 38
11 60 15 22 4 58 10 80 15 22 5 117 22 210 39 94 17 215 40 270 51 187 37 278
54 355 64 19 3 56 10 83 15 109 25 145 32 192 42 59 12 137 25 220 38 59 10
115 21 205 41 57 13 109 22 290 54 80 14 168 30 195 36 28 5 75 15 105 21 30
6 75 15 100 20 25 5 74 14 110 19 36 5 83 12 105 15 22 4 49 10 60 15 11 5 25
10 32 12 7 2 -31 32 -84 68 -52 36 -105 73 -116 83 -11 9 -24 17 -28 17 -4 0
-14 6 -21 13 -8 6 -21 17 -30 22 -8 6 -86 60 -173 120 -87 61 -171 118 -187
128 -17 10 -37 24 -45 32 -7 8 -27 22 -43 32 -17 9 -30 21 -30 25 0 4 -5 8
-10 8 -10 0 -229 146 -240 160 -3 4 -57 41 -120 83 -63 42 -119 80 -125 85 -5
4 -26 18 -45 32 -19 13 -37 27 -40 30 -3 3 -17 11 -32 19 -15 8 -36 22 -45 31
-10 9 -90 65 -177 125 -88 59 -169 116 -180 126 -11 11 -24 19 -29 19 -4 0
-14 6 -22 13 -13 12 -162 116 -534 370 -102 70 -194 134 -204 143 -11 8 -31
23 -46 32 -65 41 -286 197 -289 204 -2 4 -9 8 -16 8 -7 0 -21 8 -32 18 -37 34
-303 212 -316 211 -7 0 -24 -5 -38 -11z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M14059 10692 c-19 -26 -41 -59 -49 -74 -8 -15 -26 -41 -40 -58 -14
-18 -34 -47 -45 -65 -37 -61 -158 -240 -171 -253 -8 -7 -21 -28 -30 -47 -9
-19 -20 -35 -25 -35 -5 0 -9 -6 -9 -14 0 -8 -4 -16 -8 -18 -9 -4 -72 -93 -72
-103 0 -4 -15 -25 -33 -48 -19 -23 -45 -62 -59 -87 -14 -25 -42 -65 -62 -90
-20 -25 -36 -49 -36 -54 0 -5 -17 -32 -39 -60 -21 -28 -68 -96 -104 -151 -37
-55 -71 -105 -76 -111 -9 -11 -134 -196 -191 -283 -74 -114 -174 -256 -182
-259 -4 -2 -8 -8 -8 -13 0 -11 -191 -293 -202 -297 -4 -2 -8 -8 -8 -13 0 -5
-75 -120 -167 -255 -93 -136 -210 -311 -262 -388 -51 -78 -98 -142 -102 -144
-5 -2 -9 -10 -9 -18 0 -8 -4 -14 -10 -14 -5 0 -10 -4 -10 -9 0 -12 -171 -265
-182 -269 -4 -2 -8 -8 -8 -14 0 -10 -56 -95 -77 -116 -8 -8 -20 -26 -28 -42
-13 -26 -144 -219 -182 -268 -10 -13 -29 -43 -41 -65 -13 -23 -32 -51 -41 -62
-10 -11 -39 -54 -66 -95 -27 -41 -52 -76 -57 -78 -4 -2 -8 -10 -8 -18 0 -8 -4
-14 -10 -14 -5 0 -10 -6 -10 -13 0 -7 -9 -23 -20 -34 -11 -12 -63 -88 -116
-169 -52 -80 -104 -156 -115 -167 -10 -11 -19 -26 -19 -33 0 -7 -4 -14 -9 -16
-5 -1 -44 -56 -87 -122 -90 -136 -94 -141 -232 -345 -56 -84 -123 -181 -147
-216 -25 -34 -45 -68 -45 -74 0 -6 -4 -11 -9 -11 -5 0 -12 -8 -15 -17 -3 -10
-16 -29 -28 -43 -24 -27 -48 -65 -48 -76 0 -7 21 -4 115 16 73 16 193 38 330
61 66 12 140 25 165 30 25 5 70 14 100 19 30 6 78 15 105 21 64 13 155 27 223
35 29 4 55 10 58 15 3 5 19 9 36 9 18 0 45 4 62 9 42 13 108 26 256 51 69 11
172 30 230 42 58 11 125 24 150 29 25 4 83 15 130 23 47 9 104 16 127 16 23 0
45 5 48 10 3 6 23 10 44 10 20 0 41 4 47 9 5 5 27 11 49 14 22 3 63 10 90 16
82 18 167 32 220 37 28 3 59 9 70 14 11 5 38 11 60 14 22 3 60 10 85 15 136
27 272 53 325 61 54 8 143 25 275 51 119 24 243 45 330 55 25 3 49 10 54 15 6
5 24 9 41 9 49 0 82 21 100 65 9 22 20 48 26 57 5 10 9 27 9 37 0 11 5 23 10
26 6 3 10 17 10 31 0 13 4 32 9 42 5 9 15 37 21 62 7 25 16 54 21 65 8 20 40
161 79 350 43 211 55 288 70 455 6 63 15 160 20 215 23 242 18 750 -10 1065
-27 302 -35 362 -85 630 -8 47 -24 132 -35 190 -11 58 -24 123 -29 145 -6 22
-13 54 -16 70 -4 17 -10 39 -15 50 -5 11 -11 34 -15 50 -3 17 -11 50 -16 75
-6 25 -13 60 -16 78 -3 18 -9 35 -14 38 -5 3 -9 16 -9 29 0 13 -4 26 -9 29 -5
3 -11 18 -14 33 -3 16 -15 60 -27 98 -12 39 -25 84 -30 100 -4 17 -26 82 -48
145 -22 63 -46 136 -53 163 -7 26 -17 47 -21 47 -4 0 -8 7 -8 15 0 8 -4 23 -9
33 -14 28 -29 64 -43 107 -7 22 -18 50 -24 62 -11 22 -12 21 -45 -25z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M5415 10660 c-11 -5 -33 -9 -49 -9 -16 -1 -43 -5 -60 -11 -33 -10
-176 -37 -371 -71 -128 -21 -202 -35 -275 -50 -83 -18 -145 -30 -205 -39 -127
-21 -205 -35 -315 -59 -47 -10 -249 -46 -335 -60 -89 -15 -279 -52 -315 -61
-19 -5 -73 -14 -120 -20 -47 -6 -99 -15 -116 -21 -17 -5 -47 -9 -67 -9 -20 0
-38 -4 -41 -9 -3 -5 -23 -11 -43 -14 -21 -3 -60 -10 -88 -16 -27 -5 -102 -17
-165 -26 -63 -10 -124 -21 -135 -25 -11 -5 -38 -11 -60 -14 -22 -3 -62 -10
-90 -16 -71 -16 -196 -39 -295 -55 -77 -13 -175 -31 -300 -56 -132 -26 -160
-31 -215 -36 -33 -2 -64 -9 -70 -14 -5 -5 -26 -9 -47 -9 -28 0 -40 -5 -44 -17
-3 -10 -10 -26 -15 -35 -5 -10 -9 -25 -9 -33 0 -8 -5 -24 -10 -35 -6 -11 -15
-29 -20 -40 -5 -11 -10 -26 -10 -34 0 -7 -9 -35 -19 -62 -29 -75 -106 -389
-131 -539 -75 -444 -92 -644 -93 -1070 0 -398 17 -635 72 -990 5 -33 15 -94
21 -135 19 -131 28 -177 85 -435 21 -93 40 -182 42 -198 3 -15 9 -30 14 -33 5
-3 9 -20 9 -39 0 -19 5 -37 10 -40 6 -3 10 -17 10 -30 0 -13 5 -27 10 -30 6
-3 10 -21 10 -40 0 -19 5 -37 10 -40 6 -3 10 -19 10 -35 0 -16 5 -32 10 -35 6
-3 10 -16 10 -29 0 -12 4 -26 8 -31 5 -6 19 -44 32 -85 12 -41 36 -113 52
-160 17 -47 42 -119 55 -160 14 -41 35 -95 46 -120 11 -25 23 -55 28 -67 14
-36 32 -73 34 -70 1 1 42 61 91 132 48 72 92 132 96 133 4 2 8 8 8 14 0 12
191 292 202 296 4 2 8 10 8 18 0 8 5 14 10 14 6 0 10 6 10 13 0 7 9 23 20 35
11 12 20 25 20 31 0 5 4 11 9 13 5 2 22 24 37 50 47 76 145 220 165 242 11 11
19 26 19 33 0 7 4 13 9 13 5 0 13 9 16 20 3 11 12 26 19 33 7 7 39 53 72 102
32 50 61 92 64 95 3 3 18 25 32 50 14 25 37 58 51 74 14 16 31 41 39 55 7 14
16 28 19 31 4 3 35 48 70 101 35 52 114 168 174 258 61 89 127 187 147 219 20
31 41 62 45 67 5 6 76 109 157 230 82 121 151 222 155 225 3 3 12 17 20 33 8
15 18 27 23 27 4 0 8 5 8 10 0 12 250 384 262 388 4 2 8 8 8 13 0 8 226 346
239 359 11 10 71 98 71 105 0 8 53 79 63 83 4 2 7 8 7 13 0 12 75 125 102 153
10 11 18 26 18 33 0 7 5 13 10 13 6 0 10 6 10 13 0 7 8 22 18 33 9 10 44 60
76 109 32 50 63 92 68 93 4 2 8 10 8 18 0 8 3 14 8 14 4 0 13 12 20 28 6 15
24 42 40 60 15 18 36 48 47 66 11 18 52 79 90 136 39 57 74 111 80 121 5 11
13 19 17 19 5 0 8 6 8 13 0 7 8 22 18 33 9 11 22 27 27 36 6 8 37 54 70 102
33 48 67 98 75 111 56 85 228 338 256 376 19 26 34 50 34 53 0 4 9 16 20 28
11 12 20 28 20 35 0 7 3 13 8 13 4 0 13 9 20 20 11 19 10 20 -25 19 -21 0 -47
-4 -58 -9z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M4336 8170 c-27 -41 -52 -77 -56 -80 -4 -3 -31 -41 -60 -85 -30 -44
-58 -84 -62 -90 -8 -10 -18 -24 -111 -165 -28 -41 -53 -77 -57 -80 -3 -3 -26
-34 -50 -70 -24 -36 -46 -67 -49 -70 -3 -3 -33 -45 -66 -95 -33 -49 -63 -91
-67 -93 -5 -2 -8 -9 -8 -14 0 -9 -70 -108 -90 -128 -3 -3 -12 -17 -20 -31 -8
-15 -23 -37 -33 -50 -9 -13 -41 -58 -70 -101 -241 -354 -331 -484 -337 -488
-4 -3 -26 -34 -50 -70 -24 -36 -47 -66 -52 -68 -4 -2 -8 -8 -8 -13 0 -13 -176
-268 -236 -342 -8 -9 -14 -20 -14 -23 0 -4 -18 -32 -40 -63 -22 -31 -57 -81
-77 -111 -20 -30 -39 -57 -42 -60 -3 -3 -10 -12 -16 -21 -9 -15 -88 -130 -210
-305 -27 -39 -75 -107 -104 -150 -30 -44 -58 -83 -63 -89 -4 -5 -33 -48 -64
-95 -32 -47 -60 -87 -63 -90 -12 -10 -31 -50 -31 -65 0 -14 49 -131 72 -170 6
-11 29 -54 49 -95 38 -75 70 -131 79 -140 3 -3 12 -18 20 -35 16 -33 181 -287
191 -295 3 -3 13 -18 22 -35 9 -16 27 -42 41 -57 14 -15 26 -32 26 -38 0 -5 5
-10 10 -10 6 0 10 -6 10 -14 0 -8 3 -16 8 -18 4 -1 23 -23 42 -48 19 -25 39
-50 45 -57 13 -16 22 -28 65 -83 19 -25 37 -47 40 -50 3 -3 25 -28 50 -56 155
-174 243 -267 385 -408 88 -87 176 -170 195 -185 19 -14 49 -39 65 -56 17 -16
52 -48 79 -70 27 -22 58 -48 70 -59 11 -10 37 -30 56 -45 19 -14 37 -28 40
-31 8 -9 114 -93 144 -115 89 -63 151 -111 154 -117 2 -5 9 -8 16 -8 7 0 21
-8 32 -18 16 -15 122 -87 186 -127 9 -5 55 -36 102 -67 48 -32 91 -58 96 -58
6 0 10 -3 10 -8 0 -4 15 -13 33 -21 17 -8 58 -32 89 -53 31 -21 59 -38 62 -38
3 0 29 -14 58 -31 48 -29 114 -64 328 -175 41 -22 118 -59 170 -83 52 -24 136
-63 185 -86 113 -53 135 -60 135 -43 0 7 -7 47 -16 88 -9 41 -20 102 -25 135
-25 155 -37 218 -59 320 -6 28 -15 70 -19 95 -5 25 -14 70 -20 100 -7 30 -16
82 -21 115 -9 60 -21 121 -39 205 -13 63 -26 136 -51 275 -11 66 -32 176 -47
245 -14 69 -30 150 -35 180 -16 101 -26 165 -33 210 -4 25 -10 54 -15 65 -5
11 -11 36 -14 55 -3 19 -10 58 -16 85 -11 53 -21 107 -40 220 -16 95 -24 140
-53 280 -14 66 -32 165 -41 220 -18 114 -34 194 -46 245 -5 19 -12 51 -15 70
-3 19 -10 58 -16 85 -10 53 -21 111 -38 210 -5 33 -15 83 -21 110 -22 100 -46
226 -61 315 -21 126 -26 156 -57 310 -47 232 -52 263 -52 301 0 19 -4 39 -9
45 -5 5 -11 27 -14 49 -3 22 -11 63 -17 90 -6 28 -15 73 -20 100 -5 28 -14 75
-19 105 -6 30 -15 82 -21 115 -6 33 -15 80 -20 105 -5 25 -13 65 -18 90 -5 25
-21 110 -36 190 -30 167 -64 345 -78 410 -18 88 -28 146 -38 210 -5 36 -12 83
-15 105 -4 22 -10 49 -15 60 -5 11 -11 36 -14 55 -3 19 -9 53 -13 75 l-8 39
-49 -74z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M14205 5634 c-5 -2 -37 -8 -70 -13 -33 -5 -96 -17 -140 -26 -249 -49
-338 -65 -376 -65 -19 0 -39 -4 -45 -9 -5 -5 -27 -11 -49 -14 -22 -3 -62 -11
-90 -17 -86 -19 -136 -29 -260 -50 -120 -21 -169 -30 -255 -49 -81 -17 -153
-30 -275 -51 -104 -17 -239 -43 -340 -65 -79 -17 -135 -26 -190 -31 -33 -4
-64 -10 -69 -15 -6 -5 -29 -9 -52 -9 -24 0 -46 -4 -49 -10 -3 -5 -24 -10 -45
-10 -21 0 -41 -4 -44 -9 -3 -4 -27 -11 -53 -14 -27 -4 -73 -11 -103 -17 -30
-6 -84 -15 -120 -21 -91 -15 -137 -24 -280 -53 -69 -15 -181 -36 -250 -47 -69
-11 -145 -25 -170 -30 -25 -6 -61 -12 -80 -15 -19 -3 -44 -9 -55 -14 -11 -5
-38 -11 -60 -14 -22 -3 -69 -10 -105 -16 -36 -6 -85 -13 -110 -16 -25 -3 -54
-9 -65 -14 -11 -5 -36 -11 -55 -15 -56 -9 -121 -22 -180 -34 -30 -6 -84 -16
-120 -22 -132 -22 -252 -44 -410 -78 -25 -5 -83 -15 -130 -21 -47 -6 -99 -15
-116 -21 -17 -5 -44 -9 -62 -9 -17 0 -33 -4 -36 -9 -3 -5 -23 -11 -43 -14 -21
-3 -63 -10 -93 -16 -30 -6 -91 -17 -135 -26 -44 -8 -94 -15 -110 -15 -17 0
-35 -4 -40 -9 -6 -5 -28 -11 -50 -14 -22 -3 -60 -10 -85 -15 -25 -6 -137 -27
-250 -47 -216 -39 -277 -51 -350 -66 -93 -20 -147 -29 -212 -37 -59 -7 -90
-17 -77 -25 5 -3 52 -35 118 -82 30 -21 89 -60 130 -88 42 -28 78 -53 81 -57
7 -8 314 -220 356 -245 18 -11 42 -27 52 -36 10 -8 90 -64 177 -124 88 -60
162 -112 165 -115 3 -4 64 -46 135 -95 72 -48 132 -91 135 -94 3 -3 17 -12 33
-20 15 -8 27 -18 27 -23 0 -4 7 -8 15 -8 8 0 15 -4 15 -10 0 -5 6 -10 13 -10
7 0 22 -8 33 -18 10 -10 46 -36 79 -58 136 -92 230 -159 233 -166 2 -4 8 -8
13 -8 9 0 68 -38 79 -51 3 -3 32 -24 65 -45 109 -73 260 -178 279 -196 11 -10
25 -18 31 -18 6 0 20 -8 31 -18 10 -10 64 -48 119 -86 55 -38 102 -72 105 -75
3 -3 17 -12 32 -20 15 -8 36 -21 45 -30 10 -9 83 -61 163 -116 80 -54 151
-104 158 -111 6 -7 21 -16 32 -19 11 -3 20 -11 20 -16 0 -5 6 -9 14 -9 8 0 16
-4 18 -9 2 -5 38 -31 81 -59 42 -28 99 -67 126 -86 27 -20 53 -36 58 -36 5 0
36 13 69 29 32 15 86 41 119 56 33 16 89 46 124 67 34 21 69 38 77 38 8 0 14
5 14 10 0 6 5 10 10 10 6 0 43 21 83 47 39 25 106 68 147 94 41 27 80 52 85
57 6 4 33 23 60 42 28 18 52 36 55 40 3 3 21 17 40 30 19 13 37 27 40 30 3 4
21 17 41 31 20 13 57 42 83 64 27 22 78 65 115 95 36 30 86 74 111 96 25 23
63 57 84 75 47 41 322 315 386 385 41 44 108 121 228 260 23 27 52 63 65 80
12 17 49 65 82 107 33 41 80 103 104 137 25 34 55 73 67 87 12 14 28 38 36 52
7 14 29 46 48 71 19 25 44 63 55 83 11 20 23 37 27 37 5 0 8 6 8 13 0 7 8 22
18 33 9 10 23 31 31 47 8 15 18 27 23 27 4 0 8 5 8 11 0 6 14 30 30 54 17 24
30 46 30 48 0 3 21 41 46 84 26 43 55 92 64 108 9 17 29 50 43 75 22 37 139
271 298 594 16 32 29 65 29 72 0 8 5 14 10 14 6 0 10 11 10 24 0 14 5 28 10
31 20 13 -1 29 -25 19z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M5315 5588 c3 -24 11 -70 16 -103 12 -73 25 -145 38 -205 11 -54 58
-311 71 -395 10 -61 24 -134 41 -215 18 -85 37 -189 59 -320 5 -30 14 -77 20
-105 6 -27 15 -70 19 -95 5 -25 14 -71 20 -102 14 -75 29 -158 41 -233 5 -33
17 -94 25 -135 9 -41 20 -99 25 -127 6 -29 15 -79 21 -110 6 -32 14 -85 19
-118 10 -62 21 -124 40 -210 18 -83 35 -174 60 -325 10 -58 23 -125 39 -200
13 -63 26 -132 55 -300 14 -80 30 -167 36 -195 6 -27 15 -75 20 -105 6 -30 15
-77 20 -105 5 -27 13 -73 16 -101 6 -51 7 -52 58 -72 53 -21 139 -50 216 -72
25 -8 49 -17 54 -22 6 -4 22 -8 37 -8 15 0 30 -4 33 -9 3 -5 20 -11 38 -14 18
-3 54 -11 81 -16 26 -6 66 -15 90 -20 23 -6 56 -13 72 -16 17 -3 46 -10 65
-15 118 -29 256 -48 610 -80 298 -27 751 -27 1055 0 235 21 518 54 600 70 28
5 75 14 105 20 30 6 75 14 100 19 25 4 52 11 60 14 8 2 49 10 90 17 41 7 84
16 95 20 11 5 31 11 45 13 14 3 61 15 105 27 44 12 91 24 105 27 42 9 160 43
272 79 59 19 116 34 127 34 11 0 23 5 26 10 3 6 15 10 26 10 10 0 27 4 37 9
34 17 68 30 162 62 52 17 113 39 135 49 22 10 60 26 85 35 104 40 98 31 49 70
-24 19 -50 35 -56 35 -7 0 -13 4 -13 8 0 5 -12 15 -27 23 -16 8 -30 16 -33 20
-3 3 -45 32 -95 64 -49 32 -96 65 -103 72 -7 7 -28 20 -46 28 -18 9 -42 24
-53 34 -21 20 -157 112 -253 172 -32 21 -69 46 -81 57 -12 12 -37 28 -55 37
-18 8 -46 26 -61 39 -15 13 -55 41 -88 62 -33 22 -76 51 -96 67 -20 15 -40 27
-46 27 -5 0 -19 9 -30 20 -12 10 -88 63 -170 116 -81 54 -150 101 -153 104
-10 13 -99 70 -108 70 -6 0 -12 4 -14 8 -1 5 -109 80 -238 167 -129 88 -237
161 -240 164 -3 3 -21 15 -40 25 -19 11 -57 36 -85 56 -27 20 -183 126 -345
235 -162 109 -299 202 -305 207 -5 4 -95 65 -200 134 -104 70 -199 135 -211
145 -11 11 -23 19 -27 19 -9 0 -256 168 -275 187 -7 7 -28 20 -46 28 -18 9
-42 24 -52 33 -11 9 -57 42 -103 72 -46 30 -89 59 -95 65 -7 5 -23 17 -38 25
-14 8 -40 26 -58 40 -17 14 -47 34 -65 45 -70 42 -270 178 -273 187 -2 4 -10
8 -18 8 -8 0 -14 4 -14 8 0 5 -12 15 -27 23 -16 8 -30 16 -33 19 -3 4 -59 42
-125 85 -66 43 -121 82 -123 87 -2 4 -9 8 -16 8 -7 0 -21 8 -32 18 -10 10 -48
36 -84 60 -36 23 -70 46 -76 51 -13 11 -174 118 -218 146 -17 10 -32 23 -34
27 -2 4 -9 8 -15 8 -7 1 -28 14 -47 30 -19 17 -40 30 -46 30 -7 0 -14 4 -16 8
-4 10 -124 92 -134 92 -3 0 -3 -19 1 -42z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Shutter;
