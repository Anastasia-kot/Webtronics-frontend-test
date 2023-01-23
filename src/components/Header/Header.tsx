import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
    return( 
    <header className={styles.header}>
        <div className={styles.header__logo}>
            <svg  viewBox="0 0 399 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09963 31.8882C8.09963 32.1607 8.09963 32.3749 8.09963 32.5695V51.6674C8.08649 51.8653 8.12939 52.063 8.22356 52.2383C8.31773 52.4136 8.45946 52.5597 8.63295 52.6602C15.3488 57.2741 21.9856 61.9074 28.7015 66.4628C28.9042 66.5989 29.1153 66.7224 29.3335 66.8327V38.1373C29.7681 37.9816 36.8395 37.9816 37.4321 38.1373V66.7743C37.7481 66.7743 37.8469 66.7743 38.0049 66.5212C39.9801 65.1585 41.9554 63.8347 43.9306 62.472L58.0931 52.7381C58.8832 52.2125 58.7252 52.485 58.7252 51.4727V31.8492C59.6131 31.7913 60.5039 31.7913 61.3918 31.8492H66.7645C66.7645 32.1023 66.7645 32.2581 66.7645 32.4722V55.8335C66.7761 56.0112 66.7381 56.1887 66.6545 56.3466C66.5709 56.5045 66.445 56.6367 66.2904 56.729C64.4337 57.9749 62.6165 59.2987 60.7597 60.6225C52.0291 66.6575 43.2393 72.6925 34.5284 78.7275L33.9951 79.0974C33.8371 78.8832 33.6198 78.7275 33.4618 78.5134C33.3007 78.7222 33.1223 78.9176 32.9285 79.0974L32.4939 78.7859L9.20577 62.6277L0.751709 56.7874C0.556103 56.6673 0.397509 56.4969 0.293069 56.2944C0.188628 56.092 0.142315 55.8653 0.159134 55.6388V31.9466C2.80236 31.7695 5.45402 31.75 8.09963 31.8882Z" fill="white" />
                <path d="M66.6858 29.844H58.6465C58.6465 29.6299 58.6465 29.4741 58.6465 29.3184V27.2548C58.6653 27.1041 58.6353 26.9515 58.5608 26.8186C58.4863 26.6858 58.3711 26.5795 58.2317 26.515C56.2565 25.1523 54.1824 23.7506 52.1677 22.3295L38.0052 12.5956C37.7873 12.4634 37.5763 12.3205 37.3731 12.1673V35.6649H29.2746V12.3036L28.682 12.6151C26.45 14.1336 24.2772 15.652 22.0254 17.1705C17.5614 20.2659 13.0973 23.3223 8.67274 26.4177C8.67274 26.4177 8.45546 26.5734 8.3567 26.6124C8.26777 26.667 8.19642 26.7454 8.15096 26.8385C8.1055 26.9315 8.0878 27.0354 8.09992 27.138V29.2016C8.12902 29.3756 8.12902 29.5532 8.09992 29.7272H0.00140165C0.00140165 29.5715 0.00140165 29.3573 0.00140165 29.2016V23.1276C-0.00810349 22.9502 0.0308684 22.7736 0.114252 22.616C0.197636 22.4585 0.322376 22.3259 0.475461 22.2321C4.84076 19.2536 9.20605 16.2166 13.5714 13.2186L32.2572 0.311483L32.7313 0C32.8893 0.214145 33.0473 0.369887 33.2646 0.622967C33.4234 0.400273 33.6019 0.191811 33.7979 0C33.8966 0 34.0547 0.155742 34.1732 0.194677L60.0292 18.105C62.0044 19.4677 63.9797 20.8694 65.9549 22.2321C66.1469 22.345 66.3025 22.5091 66.4038 22.7055C66.5052 22.9018 66.5481 23.1224 66.5277 23.3418C66.5277 25.2886 66.5277 27.2353 66.5277 29.1821C66.6162 29.3929 66.6695 29.6164 66.6858 29.844Z" fill="white" />
                <path d="M92.3835 45.9439C94.3587 38.1568 96.334 30.5254 98.5067 22.7578H105.914C106.487 22.7578 106.487 22.7578 106.605 23.2834C107.869 28.3256 109.094 33.3677 110.378 38.4488C111.01 40.9212 111.603 43.4325 112.235 45.9049C112.291 46.0676 112.363 46.2242 112.452 46.3722C112.835 45.0937 113.138 43.7934 113.361 42.4786C113.677 41.1548 113.953 39.8505 114.21 38.5851C114.467 37.3197 114.803 35.9569 115.059 34.6915C115.316 33.4261 115.652 32.0634 115.909 30.798C116.165 29.5326 116.501 28.1698 116.758 26.8071C117.015 25.4444 117.351 24.179 117.607 22.9136H124.323C124.323 23.1666 124.323 23.4392 124.165 23.6339L116.264 56.2228C116.271 56.3071 116.271 56.3917 116.264 56.4759C116.264 56.69 116.106 56.7484 115.948 56.7484H109.153C109.153 56.5927 109.153 56.3786 108.995 56.2228L102.714 31.8492C102.714 31.674 102.714 31.4209 102.378 31.3236C100.146 39.7531 97.9734 48.1632 95.7414 56.6316H95.1488H88.8873C88.3145 56.6316 88.3145 56.6316 88.1367 56.0671C86.9713 51.1807 85.8651 46.3332 84.68 41.3689C83.4948 36.4047 82.2307 30.9927 81.006 25.7948C80.8085 24.9577 80.5912 24.1206 80.4332 23.2834C80.4005 23.1097 80.4005 22.9315 80.4332 22.7578H86.6552C87.2478 22.7578 87.2478 22.7578 87.3466 23.2834C87.9392 26.0673 88.5712 28.8512 89.1638 31.5767C90.1712 36.1905 91.1391 40.8628 92.2057 45.4766C92.2239 45.6123 92.2239 45.7498 92.2057 45.8855C92.2847 45.9439 92.344 45.9439 92.3835 45.9439Z" fill="white" />
                <path d="M159.384 22.7578H174.08C175.688 22.726 177.296 22.8499 178.879 23.1277C180.521 23.4059 182.043 24.1571 183.252 25.2866C184.462 26.416 185.304 27.8732 185.674 29.4742C186.085 31.176 185.922 32.9635 185.209 34.5656C184.496 36.1676 183.273 37.4968 181.724 38.3515L181.25 38.6045C181.419 38.6984 181.578 38.8093 181.724 38.9355C183.042 39.3852 184.242 40.1165 185.24 41.0769C186.602 42.5067 187.395 44.3733 187.472 46.3332C187.55 48.5441 186.921 50.7234 185.674 52.5629C185.003 53.5542 184.129 54.3967 183.109 55.0369C182.088 55.6771 180.944 56.1008 179.749 56.2812C178.958 56.2812 178.109 56.437 177.299 56.4954C171.551 56.6901 165.803 56.5927 160.115 56.5927H159.799C159.756 56.5994 159.712 56.5959 159.67 56.5826C159.629 56.5693 159.591 56.5465 159.56 56.5162C159.529 56.4858 159.506 56.4487 159.493 56.4079C159.479 56.367 159.476 56.3237 159.483 56.2812V23.3613C159.434 23.163 159.401 22.9612 159.384 22.7578ZM171.235 51.0444H173.724C174.731 51.0444 175.699 51.0444 176.707 50.8887C177.557 50.8395 178.368 50.5211 179.019 49.9809C179.67 49.4407 180.127 48.7075 180.321 47.8906C180.433 47.3723 180.486 46.8435 180.479 46.3138C180.492 45.2879 180.12 44.2935 179.435 43.5211C178.75 42.7488 177.799 42.2528 176.766 42.1282C175.519 41.9294 174.256 41.8382 172.993 41.8556H166.356C166.001 41.8556 165.942 41.8556 165.942 42.2839V50.7719C165.935 50.8143 165.938 50.8577 165.952 50.8985C165.965 50.9393 165.988 50.9764 166.019 51.0068C166.05 51.0372 166.088 51.0599 166.129 51.0732C166.171 51.0865 166.215 51.09 166.258 51.0833H166.633C168.233 51.0444 169.714 51.0444 171.216 51.0444H171.235ZM171.077 28.2672C169.635 28.2672 168.193 28.2672 166.751 28.2672H166.376C166.333 28.2605 166.289 28.264 166.248 28.2773C166.206 28.2906 166.169 28.3134 166.138 28.3437C166.107 28.3741 166.084 28.4112 166.07 28.452C166.057 28.4929 166.053 28.5362 166.06 28.5787V35.918C166.06 36.1905 166.179 36.2879 166.435 36.249H173.349C174.242 36.2574 175.135 36.1857 176.015 36.0348C176.781 35.9449 177.5 35.6234 178.073 35.1144C178.646 34.6055 179.045 33.934 179.215 33.1925C179.354 32.623 179.354 32.0294 179.215 31.4599C179.158 30.843 178.923 30.255 178.538 29.7653C178.153 29.2755 177.634 28.9043 177.042 28.6955C176.55 28.5055 176.03 28.3938 175.502 28.3645C174.02 28.3256 172.539 28.3256 171.057 28.2672H171.077Z" fill="white" />
                <path d="M222.039 22.7578H237.367C239.041 22.7731 240.712 22.9162 242.364 23.1861C243.812 23.4044 245.17 24.0153 246.286 24.9503C247.402 25.8854 248.233 27.1079 248.685 28.4813C249.568 30.7724 249.638 33.2909 248.882 35.626C248.502 36.7952 247.858 37.8646 247 38.7545C246.141 39.6444 245.09 40.3318 243.924 40.7655C243.047 41.1015 242.142 41.362 241.218 41.5442L240.527 41.6999C240.662 41.8346 240.823 41.9406 241.001 42.0114C242.815 43.0955 244.361 44.5655 245.524 46.3138L249.356 52.2514C250.146 53.4973 250.956 54.8211 251.746 56.1449C251.865 56.3007 251.904 56.4564 252.062 56.6706C251.865 56.6706 251.687 56.6706 251.529 56.6706H244.616C244.456 56.6844 244.295 56.6511 244.155 56.5748C244.014 56.4986 243.899 56.3828 243.826 56.2423C241.85 53.4195 240.033 50.5382 238.176 47.696C237.544 46.7615 236.853 45.866 236.201 44.9121C235.985 44.6109 235.74 44.3306 235.47 44.075C234.521 43.1263 233.245 42.5635 231.895 42.4981C230.987 42.4981 230.137 42.4981 229.229 42.4981H228.715V56.6511C228.143 56.6803 227.569 56.6803 226.997 56.6511H222.098C221.979 56.2423 221.92 23.3613 222.039 22.7578ZM228.735 37.1445H229.327H235.056C236.476 37.1677 237.895 37.0831 239.302 36.8914C240.001 36.7835 240.656 36.4859 241.193 36.0321C241.731 35.5782 242.129 34.986 242.344 34.3216C242.546 33.6397 242.619 32.9272 242.562 32.2191C242.51 31.4122 242.204 30.6413 241.687 30.0134C241.17 29.3854 240.468 28.9316 239.678 28.7149C239.034 28.548 238.368 28.4758 237.702 28.5008C234.878 28.5008 232.053 28.5008 229.288 28.5008C229.189 28.5008 229.031 28.5008 228.873 28.5008C228.735 31.3236 228.735 34.2048 228.735 37.1445Z" fill="white" />
                <path d="M298.718 56.5925C298.501 56.5925 298.343 56.5925 298.185 56.5925H292.812C292.777 56.5955 292.743 56.591 292.71 56.5793C292.678 56.5676 292.648 56.5491 292.624 56.525C292.599 56.5009 292.58 56.4717 292.569 56.4397C292.557 56.4076 292.552 56.3734 292.555 56.3394V23.3611C292.538 23.1538 292.538 22.9455 292.555 22.7382C292.772 22.7382 292.871 22.7382 293.049 22.7382H298.58C298.725 22.7336 298.869 22.772 298.992 22.8483C299.115 22.9246 299.212 23.0353 299.271 23.1664L304.9 32.5109L312.406 44.8924C312.542 45.0532 312.668 45.2222 312.782 45.3986C312.808 45.2589 312.847 45.1219 312.9 44.9898V23.3611C312.881 23.1539 312.881 22.9454 312.9 22.7382H318.964C319.083 23.108 319.083 55.8333 318.964 56.573H318.451H312.861C312.693 56.5907 312.524 56.5549 312.378 56.4708C312.232 56.3867 312.117 56.2588 312.051 56.1058C308.693 50.5381 305.295 45.0287 301.898 39.5193C300.989 38.0008 300.022 36.4824 299.113 34.9639C298.993 34.7975 298.888 34.6217 298.797 34.4383C298.756 34.5726 298.723 34.7091 298.698 34.8471V55.9111C298.674 56.1381 298.68 56.3673 298.718 56.5925Z" fill="white" />
                <path d="M287.064 39.7529C287.112 42.3413 286.697 44.9177 285.84 47.3647C285.143 49.4796 283.953 51.4039 282.364 52.9829C280.776 54.5619 278.834 55.7515 276.694 56.4562C274.787 57.0878 272.779 57.3715 270.768 57.2933C268.819 57.3293 266.876 57.0464 265.02 56.4562C262.825 55.7589 260.831 54.5512 259.208 52.935C257.586 51.3188 256.382 49.3415 255.697 47.1701C255.159 45.5548 254.821 43.8814 254.69 42.1863C254.591 40.598 254.591 39.0051 254.69 37.4167C254.821 34.6408 255.627 31.9366 257.04 29.5323C258.15 27.5672 259.728 25.8973 261.637 24.6663C263.547 23.4353 265.732 22.68 268.003 22.4655C269.639 22.2417 271.296 22.2025 272.941 22.3487C275.96 22.5543 278.843 23.6638 281.205 25.5286C283.566 27.3934 285.294 29.9246 286.156 32.7834C286.638 34.3408 286.936 35.9478 287.044 37.5725C287.005 38.2344 287.064 39.0326 287.064 39.7529ZM280.21 39.6555C280.21 38.9158 280.21 38.1954 280.092 37.5141C280.01 36.144 279.703 34.7961 279.183 33.5232C278.759 32.3573 278.076 31.2996 277.184 30.4272C276.292 29.5548 275.214 28.8899 274.028 28.4811C272.642 28.0237 271.17 27.8838 269.722 28.0722C268.65 28.1437 267.604 28.425 266.644 28.8997C265.684 29.3743 264.83 30.0328 264.132 30.8366C263.152 31.9643 262.443 33.2951 262.058 34.7302C261.575 36.5923 261.376 38.5145 261.465 40.4342C261.493 42.0931 261.766 43.7391 262.275 45.3206C262.645 46.487 263.251 47.5676 264.055 48.4976C264.859 49.4276 265.846 50.1878 266.956 50.7327C268.311 51.3637 269.805 51.6514 271.302 51.5698C272.731 51.53 274.126 51.1277 275.351 50.4017C277.25 49.2374 278.655 47.4312 279.301 45.3206C279.832 43.4747 280.137 41.5728 280.21 39.6555Z" fill="white" />
                <path d="M397.974 32.3746L391.377 32.6861C391.377 32.4719 391.377 32.3162 391.219 32.1604C391.128 31.7037 390.982 31.2593 390.784 30.8366C390.541 30.1446 390.121 29.5263 389.563 29.0419C389.006 28.5575 388.331 28.2234 387.604 28.0722C385.765 27.5923 383.823 27.6464 382.014 28.228C381.526 28.3958 381.061 28.6248 380.632 28.9093C380.25 29.1423 379.933 29.4651 379.71 29.8487C379.486 30.2323 379.363 30.6647 379.351 31.1069C379.34 31.5491 379.44 31.9872 379.642 32.3818C379.845 32.7764 380.144 33.1151 380.513 33.3674C380.912 33.6437 381.343 33.8724 381.797 34.0488C383.326 34.6845 384.913 35.1735 386.538 35.5089C388.558 35.966 390.539 36.5779 392.463 37.3389C393.878 37.8858 395.168 38.7066 396.256 39.7529C397.798 41.335 398.721 43.404 398.863 45.5932C399.044 47.1161 398.876 48.6597 398.369 50.1097C397.88 51.6122 397.028 52.975 395.885 54.0806C394.743 55.1861 393.345 56.0014 391.812 56.4562C390.303 56.9024 388.744 57.164 387.17 57.2349C386.038 57.2933 384.904 57.2933 383.772 57.2349C381.588 57.1631 379.451 56.5898 377.53 55.5606C375.171 54.2167 373.409 52.0493 372.592 49.4867C372.213 48.4336 371.948 47.3438 371.802 46.2356V45.7489L378.242 45.1065C378.272 45.3609 378.339 45.61 378.439 45.8463C378.665 46.5945 378.936 47.3291 379.249 48.0461C379.641 48.9278 380.249 49.7002 381.017 50.2946C381.786 50.889 382.691 51.2869 383.654 51.453C385.351 51.7775 387.102 51.7109 388.77 51.2583C389.871 50.9341 390.827 50.2469 391.476 49.3115C391.84 48.8559 392.097 48.3258 392.227 47.7599C392.356 47.1941 392.356 46.6068 392.226 46.0409C392.057 45.3048 391.621 44.6545 391.002 44.211C390.359 43.7386 389.637 43.3827 388.868 43.1597L383.614 41.758C381.717 41.3107 379.875 40.6578 378.123 39.8113C377.001 39.28 375.998 38.5325 375.174 37.613C374.349 36.6935 373.72 35.6207 373.323 34.4576C372.649 32.3423 372.787 30.0563 373.713 28.0352C374.638 26.014 376.285 24.3989 378.34 23.4973C379.906 22.8253 381.575 22.4173 383.278 22.2903C384.593 22.1949 385.914 22.1949 387.229 22.2903C388.942 22.3962 390.621 22.8051 392.187 23.4973C393.642 24.1465 394.911 25.1435 395.876 26.3979C396.842 27.6523 397.475 29.1245 397.718 30.6809C397.718 31.1676 397.717 31.6348 397.876 32.0436L397.974 32.3746Z" fill="white" />
                <path d="M151.463 41.6412H135.385C134.654 41.6412 134.654 41.6412 134.654 42.381V50.6159C134.654 51.0247 134.654 51.0831 135.128 51.0831H153.439V56.5925C153.063 56.6898 128.689 56.7482 128.057 56.5925C128.057 56.3978 128.057 56.1252 128.057 55.9111V23.3611C128.031 23.1347 128.031 22.9061 128.057 22.6797H152.787C152.787 24.6265 152.787 26.4175 152.787 28.3059H135.385C134.654 28.3059 134.654 28.1891 134.654 29.0262V35.6257C134.654 35.9372 134.654 35.9761 135.069 36.0345H150.871C151.661 36.0345 151.661 36.0345 151.661 36.7743V40.882C151.523 41.2324 151.523 41.3882 151.463 41.6412Z" fill="white" />
                <path d="M367.397 32.0439L360.859 33.6208C360.809 33.4427 360.75 33.2673 360.682 33.0952C360.321 31.7932 359.604 30.6144 358.608 29.6883C357.261 28.4804 355.489 27.8378 353.669 27.8973C352.428 27.8652 351.198 28.1301 350.083 28.6692C348.969 29.2083 348.003 30.0055 347.27 30.9926C346.536 32.0256 346.013 33.1893 345.729 34.419C345.314 36.2915 345.135 38.2073 345.196 40.123C345.166 41.8451 345.386 43.5625 345.847 45.2235C346.206 46.8082 347.015 48.2598 348.178 49.4091C349.511 50.6814 351.281 51.4114 353.136 51.4532C354.036 51.5236 354.941 51.417 355.799 51.1396C356.657 50.8622 357.451 50.4196 358.134 49.8374C358.983 49.1408 359.658 48.2617 360.109 47.2677C360.484 46.4695 360.701 45.6324 361.017 44.7953C361.017 44.6395 361.116 44.4838 361.175 44.2696L367.397 46.3137V46.4695C366.879 48.5781 365.939 50.5636 364.632 52.3098C363.165 54.2882 361.085 55.7434 358.706 56.4564C355.618 57.432 352.305 57.4862 349.186 56.6122C347.237 56.0972 345.426 55.1681 343.88 53.8901C342.335 52.6122 341.091 51.0163 340.238 49.2144C339.291 47.3431 338.695 45.3183 338.48 43.2378C338.309 41.7256 338.256 40.2026 338.322 38.6824C338.344 35.9184 338.943 33.1885 340.08 30.6617C341.022 28.4917 342.508 26.5927 344.397 25.1424C346.287 23.692 348.519 22.7376 350.884 22.3684C353.472 21.8871 356.138 22.0138 358.667 22.7383C360.636 23.2466 362.439 24.2461 363.903 25.6407C365.366 27.0353 366.441 28.778 367.022 30.7006C367.022 31.0121 367.22 31.382 367.338 31.6935C367.321 31.7525 367.317 31.8147 367.327 31.8754C367.337 31.936 367.361 31.9936 367.397 32.0439Z" fill="white" />
                <path d="M207.501 56.5925C207.284 56.5925 207.126 56.5925 206.968 56.5925H201.042C201.007 56.5952 200.971 56.5907 200.938 56.5792C200.904 56.5676 200.874 56.5494 200.848 56.5257C200.822 56.5019 200.801 56.4731 200.787 56.441C200.773 56.409 200.765 56.3744 200.765 56.3395V29.2015C200.784 28.9162 200.784 28.6301 200.765 28.3449H190.889C190.72 26.4992 190.72 24.6422 190.889 22.7966H217.279C217.303 22.7846 217.33 22.7783 217.358 22.7783C217.385 22.7783 217.412 22.7846 217.437 22.7966C217.565 24.6503 217.565 26.5106 217.437 28.3643H208.232C207.541 28.3643 207.541 28.3643 207.541 29.0457V55.8722C207.498 56.1099 207.485 56.3517 207.501 56.5925Z" fill="white" />
                <path d="M332.83 56.5928H326.332C326.233 56.2424 326.174 23.4977 326.332 22.8164C326.648 22.719 332.258 22.6606 332.87 22.8164C332.89 23.1862 332.949 55.9699 332.83 56.5928Z" fill="white" />
            </svg>
         </div>


        <nav className={styles.header__navigation}>
            <ul className={styles.navigation__list}>
                <li className={styles.list__item}>About</li>
                <li className={styles.list__item}>Programs</li>
                <li className={styles.list__item}>Steps</li>
                <li className={styles.list__item}>Questions</li>
                <li className={styles.list__item}>Get in touch</li>
            </ul>
        </nav>
    </header>
    )
}