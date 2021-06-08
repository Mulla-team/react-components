import * as React from 'react'
import styled from 'styled-components'
import ThemeToggleButton from '@Components/themetoggle'

const NavBarWrap = styled.nav `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.mode === 'dark' ? props.theme.bgDark : props.theme.bgWhite};
  transition: background-color 0.15s ease-in;
  .nav-bar__inner {
    width: 100%;
    padding: 20px 24px;
    max-width: ${props => props.theme.xLargeWindowSize};
    svg {
      height: 44px;
      width: auto;
      path {
        fill: ${props => props.theme.mode === 'dark' ? props.theme.bgWhite : props.theme.bgDark};
        transition: fill 0.15s ease-in;
      }
    }
    @media(min-width: ${props => props.theme.screenSize.tablet}) {
      padding: 20px 32px;
      svg {
        height: 50px;
        width: auto;
      }
    }
  }
`

const NavMenuList = styled.ul `
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
  li {
    font-size: 1.2em;
    font-family: 'Inter-medium';
  }
`

interface Props {
  onToggleMode: () => void,
  onToggleNavMenu: () => void,
  themeMode: string
}

function NavBar(props: Props) {
    return <NavBarWrap>
        <div className="nav-bar__inner flex items-center justify-between">
          <span className="block md:hidden">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52ZM12.278 34.149H13.6949V32.447H12.278C11.953 32.447 11.7291 32.3795 11.6064 32.2446C11.4899 32.1158 11.4316 31.8888 11.4316 31.5638V27.6445C11.4316 27.3685 11.3795 27.1109 11.2752 26.8717C11.1771 26.6325 11.0483 26.424 10.8888 26.2461C10.7355 26.0621 10.5546 25.918 10.346 25.8137C10.1436 25.7033 9.92896 25.6297 9.70202 25.5929C10.1498 25.507 10.5484 25.2862 10.898 24.9305C11.2538 24.5686 11.4316 24.0994 11.4316 23.5229V19.6036C11.4316 19.2724 11.4899 19.0424 11.6064 18.9136C11.7291 18.7787 11.953 18.7112 12.278 18.7112H13.6949V17H12.278C11.9039 17 11.5574 17.0675 11.2384 17.2024C10.9256 17.3312 10.6558 17.5121 10.4288 17.7452C10.208 17.9783 10.0332 18.2512 9.90442 18.564C9.78175 18.8768 9.72042 19.2234 9.72042 19.6036V23.5229C9.72042 24.0381 9.57628 24.3693 9.28801 24.5165C8.99974 24.6575 8.57041 24.7281 8 24.7281V26.4393C8.57041 26.4393 8.99974 26.516 9.28801 26.6693C9.57628 26.8165 9.72042 27.1416 9.72042 27.6445V31.5638C9.72042 31.944 9.78175 32.2906 9.90442 32.6034C10.0332 32.9162 10.208 33.1891 10.4288 33.4222C10.6558 33.6552 10.9256 33.8331 11.2384 33.9558C11.5574 34.0846 11.9039 34.149 12.278 34.149ZM24.2382 23.9277C24.4774 23.9829 24.7105 24.0657 24.9374 24.1761L25.655 22.3177C25.379 22.1766 25.0969 22.0785 24.8086 22.0233C24.5203 21.9681 24.2443 21.9405 23.9806 21.9405C23.1403 21.9405 22.4135 22.1183 21.8002 22.4741C21.1929 22.8298 20.7329 23.437 20.4201 24.2957V22.1429H16.5745V23.8633H18.5157V29.0061H16.5745V30.7174H22.343V29.0061H20.4201V26.8717C20.4201 26.3565 20.4937 25.9118 20.6409 25.5377C20.7943 25.1574 21.0059 24.8415 21.2757 24.5901C21.5456 24.3386 21.8646 24.1515 22.2326 24.0289C22.6067 23.9001 23.0054 23.8357 23.4286 23.8357C23.7352 23.8357 24.0051 23.8663 24.2382 23.9277ZM35.7015 22.1429L34.4135 30.7174H32.0583L31.1567 25.5561L30.2366 30.7174H27.8814L26.5934 22.1429H28.461L29.2154 27.8745L30.1354 22.1429H32.1503L33.0795 27.8745L33.8339 22.1429H35.7015ZM39.7312 32.447H38.3143V34.149H39.7312C40.1053 34.149 40.4488 34.0846 40.7616 33.9558C41.0744 33.8331 41.3442 33.6552 41.5712 33.4222C41.7981 33.1891 41.9729 32.9162 42.0956 32.6034C42.2244 32.2906 42.2888 31.944 42.2888 31.5638V27.6077C42.2888 27.1048 42.4329 26.7797 42.7212 26.6325C43.0095 26.4792 43.4357 26.4025 44 26.4025V24.6913C43.4357 24.6913 43.0095 24.6207 42.7212 24.4797C42.4329 24.3325 42.2888 24.0013 42.2888 23.4861V19.5668C42.2888 19.1866 42.2244 18.84 42.0956 18.5272C41.9729 18.2144 41.7981 17.9445 41.5712 17.7176C41.3442 17.4907 41.0744 17.3159 40.7616 17.1932C40.4488 17.0644 40.1053 17 39.7312 17H38.3143V18.7112H39.7312C40.0562 18.7112 40.277 18.7725 40.3936 18.8952C40.5162 19.0118 40.5776 19.2356 40.5776 19.5668V23.4861C40.5776 24.0626 40.7524 24.5318 41.102 24.8937C41.4516 25.2494 41.8533 25.4702 42.3072 25.5561C42.0802 25.5929 41.8625 25.6665 41.654 25.7769C41.4516 25.8812 41.2706 26.0253 41.1112 26.2093C40.9578 26.3872 40.829 26.5957 40.7248 26.8349C40.6266 27.0741 40.5776 27.3317 40.5776 27.6077V31.5638C40.5776 31.8888 40.5162 32.1158 40.3936 32.2446C40.277 32.3795 40.0562 32.447 39.7312 32.447Z" fill="white"/>
            </svg>
          </span>
          <span className="hidden md:block">
            <svg width="262" height="52" viewBox="0 0 262 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M81.499 29.3745C81.3688 30.5708 80.8968 31.5229 80.083 32.231C79.2773 32.9308 78.2682 33.2808 77.0557 33.2808C76.3883 33.2808 75.778 33.1709 75.2246 32.9512C74.6712 32.7314 74.1992 32.4263 73.8086 32.0356C73.418 31.645 73.1128 31.1771 72.8931 30.6318C72.6815 30.0785 72.5757 29.4762 72.5757 28.8252V23.9058H70V21.623H72.5757V17.0698H75.1025V21.623H79.8755V23.9058H75.1025V28.8252C75.1025 29.5576 75.2816 30.1029 75.6396 30.4609C75.9977 30.819 76.4697 30.998 77.0557 30.998C77.7718 30.998 78.3049 30.7905 78.6548 30.3755C79.0047 29.9604 79.2122 29.46 79.2773 28.874L81.499 29.3745ZM94.4263 33H91.8994V25.981C91.8994 25.0939 91.7326 24.4795 91.3989 24.1377C91.0653 23.7959 90.5811 23.625 89.9463 23.625C89.0104 23.625 88.2454 24.0034 87.6514 24.7603C87.0654 25.5171 86.7725 26.5628 86.7725 27.8975V33H84.2456V17.0698H86.7725V24.4795C87.0247 23.4948 87.4927 22.7298 88.1763 22.1846C88.8599 21.6312 89.7021 21.3545 90.7031 21.3545C91.8669 21.3545 92.7783 21.7329 93.4375 22.4897C94.0967 23.2466 94.4263 24.4103 94.4263 25.981V33ZM99.6143 28.2759C99.7363 29.0571 100.107 29.7082 100.725 30.229C101.352 30.7417 102.19 30.998 103.24 30.998C104.062 30.998 104.774 30.8719 105.376 30.6196C105.986 30.3592 106.511 30.0174 106.951 29.5942L108.245 31.3765C107.512 32.1089 106.735 32.6094 105.913 32.8779C105.099 33.1465 104.208 33.2808 103.24 33.2808C102.361 33.2808 101.543 33.1343 100.786 32.8413C100.029 32.5483 99.3742 32.1414 98.8208 31.6206C98.2674 31.0916 97.832 30.465 97.5146 29.7407C97.2054 29.0164 97.0508 28.2108 97.0508 27.3237C97.0508 26.4611 97.1932 25.6676 97.478 24.9434C97.771 24.2109 98.1779 23.5802 98.6987 23.0513C99.2277 22.5142 99.8584 22.0991 100.591 21.8062C101.323 21.505 102.133 21.3545 103.02 21.3545C103.94 21.3545 104.774 21.5132 105.522 21.8306C106.271 22.1398 106.91 22.5915 107.439 23.1855C107.976 23.7796 108.395 24.508 108.696 25.3706C108.997 26.2251 109.148 27.1935 109.148 28.2759H99.6143ZM106.292 26.0542C106.161 25.3218 105.783 24.7358 105.156 24.2964C104.53 23.8488 103.818 23.625 103.02 23.625C102.222 23.625 101.506 23.8488 100.872 24.2964C100.237 24.7358 99.8543 25.3218 99.7241 26.0542H106.292ZM122.039 24.3208C121.737 24.1743 121.428 24.0645 121.111 23.9912C120.802 23.9098 120.444 23.8691 120.037 23.8691C119.475 23.8691 118.946 23.9546 118.45 24.1255C117.961 24.2882 117.538 24.5365 117.18 24.8701C116.822 25.2038 116.541 25.6229 116.338 26.1274C116.143 26.6239 116.045 27.2139 116.045 27.8975V30.7295H118.596V33H110.942V30.7295H113.518V23.9058H110.942V21.623H116.045V24.4795C116.46 23.3402 117.07 22.5345 117.876 22.0625C118.69 21.5905 119.654 21.3545 120.769 21.3545C121.119 21.3545 121.485 21.3911 121.868 21.4644C122.25 21.5376 122.625 21.6678 122.991 21.855L122.039 24.3208ZM136.321 21.623L134.612 33H131.487L130.291 26.1519L129.07 33H125.945L124.236 21.623H126.714L127.715 29.228L128.936 21.623H131.609L132.842 29.228L133.843 21.623H136.321ZM138.188 29.7285C138.188 29.0612 138.368 28.4793 138.726 27.9829C139.084 27.4784 139.552 27.0592 140.129 26.7256C140.715 26.3919 141.383 26.1437 142.131 25.981C142.888 25.8101 143.657 25.7246 144.438 25.7246C144.87 25.7246 145.24 25.7327 145.549 25.749C145.859 25.7653 146.172 25.7897 146.489 25.8223V25.3706C146.489 24.7765 146.257 24.333 145.793 24.04C145.338 23.7471 144.736 23.6006 143.987 23.6006C143.303 23.6006 142.607 23.6982 141.899 23.8936C141.191 24.0807 140.52 24.3574 139.885 24.7236L138.86 22.7461C139.609 22.3148 140.41 21.9771 141.265 21.7329C142.127 21.4806 143.035 21.3545 143.987 21.3545C144.605 21.3545 145.212 21.4237 145.806 21.562C146.408 21.7004 146.945 21.9282 147.417 22.2456C147.897 22.563 148.28 22.978 148.564 23.4907C148.849 23.9953 148.992 24.6219 148.992 25.3706V33H146.489V31.3276C146.09 31.9461 145.5 32.4263 144.719 32.7681C143.946 33.1099 143.112 33.2808 142.217 33.2808C141.663 33.2808 141.139 33.2035 140.642 33.0488C140.154 32.9023 139.731 32.6785 139.373 32.3774C139.014 32.0763 138.726 31.7061 138.506 31.2666C138.294 30.819 138.188 30.3063 138.188 29.7285ZM142.864 31.0225C143.36 31.0225 143.824 30.9614 144.255 30.8394C144.695 30.7091 145.081 30.5342 145.415 30.3145C145.749 30.0866 146.009 29.814 146.196 29.4966C146.392 29.1792 146.489 28.8293 146.489 28.4468V28.0195C146.09 27.9544 145.716 27.9178 145.366 27.9097C145.016 27.9015 144.707 27.8975 144.438 27.8975C143.201 27.8975 142.266 28.0602 141.631 28.3857C141.004 28.7113 140.691 29.1141 140.691 29.5942C140.691 30.5464 141.415 31.0225 142.864 31.0225ZM162.664 33H160.137V25.981C160.137 25.0939 159.97 24.4795 159.636 24.1377C159.303 23.7959 158.818 23.625 158.184 23.625C157.248 23.625 156.483 24.0034 155.889 24.7603C155.303 25.5171 155.01 26.5628 155.01 27.8975V33H152.483V21.623H155.01V24.4795C155.262 23.4948 155.73 22.7298 156.414 22.1846C157.097 21.6312 157.939 21.3545 158.94 21.3545C160.104 21.3545 161.016 21.7329 161.675 22.4897C162.334 23.2466 162.664 24.4103 162.664 25.981V33ZM176.311 33H173.784V31.9502C173.296 32.3815 172.804 32.7111 172.307 32.939C171.811 33.1668 171.245 33.2808 170.61 33.2808C169.878 33.2808 169.198 33.1343 168.572 32.8413C167.945 32.5483 167.404 32.1414 166.948 31.6206C166.501 31.0916 166.147 30.4609 165.886 29.7285C165.634 28.9961 165.508 28.1945 165.508 27.3237C165.508 26.4611 165.634 25.6636 165.886 24.9312C166.147 24.1906 166.501 23.5599 166.948 23.0391C167.404 22.5101 167.945 22.0991 168.572 21.8062C169.198 21.505 169.878 21.3545 170.61 21.3545C171.245 21.3545 171.811 21.4644 172.307 21.6841C172.804 21.8957 173.296 22.2171 173.784 22.6484V19.3525H171.587V17.0698H176.311V33ZM173.784 24.6504C173.483 24.3167 173.092 24.0645 172.612 23.8936C172.14 23.7145 171.689 23.625 171.257 23.625C170.305 23.625 169.528 23.9668 168.926 24.6504C168.332 25.334 168.035 26.2251 168.035 27.3237C168.035 28.4224 168.332 29.3094 168.926 29.9849C169.528 30.6603 170.305 30.998 171.257 30.998C171.689 30.998 172.14 30.9126 172.612 30.7417C173.092 30.5627 173.483 30.3063 173.784 29.9727V24.6504ZM179.131 29.7285C179.131 29.0612 179.31 28.4793 179.668 27.9829C180.026 27.4784 180.494 27.0592 181.072 26.7256C181.658 26.3919 182.325 26.1437 183.074 25.981C183.831 25.8101 184.6 25.7246 185.381 25.7246C185.812 25.7246 186.182 25.7327 186.492 25.749C186.801 25.7653 187.114 25.7897 187.432 25.8223V25.3706C187.432 24.7765 187.2 24.333 186.736 24.04C186.28 23.7471 185.678 23.6006 184.929 23.6006C184.246 23.6006 183.55 23.6982 182.842 23.8936C182.134 24.0807 181.462 24.3574 180.828 24.7236L179.802 22.7461C180.551 22.3148 181.353 21.9771 182.207 21.7329C183.07 21.4806 183.977 21.3545 184.929 21.3545C185.548 21.3545 186.154 21.4237 186.748 21.562C187.35 21.7004 187.887 21.9282 188.359 22.2456C188.84 22.563 189.222 22.978 189.507 23.4907C189.792 23.9953 189.934 24.6219 189.934 25.3706V33H187.432V31.3276C187.033 31.9461 186.443 32.4263 185.662 32.7681C184.889 33.1099 184.054 33.2808 183.159 33.2808C182.606 33.2808 182.081 33.2035 181.584 33.0488C181.096 32.9023 180.673 32.6785 180.315 32.3774C179.957 32.0763 179.668 31.7061 179.448 31.2666C179.237 30.819 179.131 30.3063 179.131 29.7285ZM183.806 31.0225C184.303 31.0225 184.766 30.9614 185.198 30.8394C185.637 30.7091 186.024 30.5342 186.357 30.3145C186.691 30.0866 186.951 29.814 187.139 29.4966C187.334 29.1792 187.432 28.8293 187.432 28.4468V28.0195C187.033 27.9544 186.659 27.9178 186.309 27.9097C185.959 27.9015 185.649 27.8975 185.381 27.8975C184.144 27.8975 183.208 28.0602 182.573 28.3857C181.947 28.7113 181.633 29.1141 181.633 29.5942C181.633 30.5464 182.358 31.0225 183.806 31.0225ZM203.606 33H201.079V25.981C201.079 25.0939 200.912 24.4795 200.579 24.1377C200.245 23.7959 199.761 23.625 199.126 23.625C198.19 23.625 197.425 24.0034 196.831 24.7603C196.245 25.5171 195.952 26.5628 195.952 27.8975V33H193.425V21.623H195.952V24.4795C196.204 23.4948 196.672 22.7298 197.356 22.1846C198.04 21.6312 198.882 21.3545 199.883 21.3545C201.047 21.3545 201.958 21.7329 202.617 22.4897C203.276 23.2466 203.606 24.4103 203.606 25.981V33ZM217.253 33H214.727V31.9502C214.238 32.3815 213.746 32.7111 213.25 32.939C212.753 33.1668 212.188 33.2808 211.553 33.2808C210.82 33.2808 210.141 33.1343 209.514 32.8413C208.888 32.5483 208.346 32.1414 207.891 31.6206C207.443 31.0916 207.089 30.4609 206.829 29.7285C206.576 28.9961 206.45 28.1945 206.45 27.3237C206.45 26.4611 206.576 25.6636 206.829 24.9312C207.089 24.1906 207.443 23.5599 207.891 23.0391C208.346 22.5101 208.888 22.0991 209.514 21.8062C210.141 21.505 210.82 21.3545 211.553 21.3545C212.188 21.3545 212.753 21.4644 213.25 21.6841C213.746 21.8957 214.238 22.2171 214.727 22.6484V19.3525H212.529V17.0698H217.253V33ZM214.727 24.6504C214.425 24.3167 214.035 24.0645 213.555 23.8936C213.083 23.7145 212.631 23.625 212.2 23.625C211.248 23.625 210.47 23.9668 209.868 24.6504C209.274 25.334 208.977 26.2251 208.977 27.3237C208.977 28.4224 209.274 29.3094 209.868 29.9849C210.47 30.6603 211.248 30.998 212.2 30.998C212.631 30.998 213.083 30.9126 213.555 30.7417C214.035 30.5627 214.425 30.3063 214.727 29.9727V24.6504ZM222.441 28.2759C222.563 29.0571 222.934 29.7082 223.552 30.229C224.179 30.7417 225.017 30.998 226.067 30.998C226.889 30.998 227.601 30.8719 228.203 30.6196C228.813 30.3592 229.338 30.0174 229.778 29.5942L231.072 31.3765C230.339 32.1089 229.562 32.6094 228.74 32.8779C227.926 33.1465 227.035 33.2808 226.067 33.2808C225.188 33.2808 224.37 33.1343 223.613 32.8413C222.856 32.5483 222.201 32.1414 221.648 31.6206C221.095 31.0916 220.659 30.465 220.342 29.7407C220.033 29.0164 219.878 28.2108 219.878 27.3237C219.878 26.4611 220.02 25.6676 220.305 24.9434C220.598 24.2109 221.005 23.5802 221.526 23.0513C222.055 22.5142 222.686 22.0991 223.418 21.8062C224.15 21.505 224.96 21.3545 225.847 21.3545C226.767 21.3545 227.601 21.5132 228.35 21.8306C229.098 22.1398 229.737 22.5915 230.266 23.1855C230.803 23.7796 231.222 24.508 231.523 25.3706C231.825 26.2251 231.975 27.1935 231.975 28.2759H222.441ZM229.119 26.0542C228.988 25.3218 228.61 24.7358 227.983 24.2964C227.357 23.8488 226.645 23.625 225.847 23.625C225.05 23.625 224.333 23.8488 223.699 24.2964C223.064 24.7358 222.681 25.3218 222.551 26.0542H229.119ZM245.146 21.623L240.947 33H237.969L233.77 21.623H236.467L239.47 30.229L242.449 21.623H245.146ZM247.417 35.2705V33H258.794V35.2705H247.417Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52ZM12.278 34.3751H13.6949V32.673H12.278C11.953 32.673 11.7291 32.6056 11.6064 32.4706C11.4899 32.3418 11.4316 32.1149 11.4316 31.7898V27.8706C11.4316 27.5946 11.3795 27.337 11.2752 27.0978C11.1771 26.8586 11.0483 26.65 10.8888 26.4722C10.7355 26.2882 10.5546 26.144 10.346 26.0398C10.1436 25.9294 9.92896 25.8558 9.70202 25.819C10.1498 25.7331 10.5484 25.5123 10.898 25.1566C11.2538 24.7947 11.4316 24.3255 11.4316 23.7489V19.8297C11.4316 19.4985 11.4899 19.2685 11.6064 19.1397C11.7291 19.0048 11.953 18.9373 12.278 18.9373H13.6949V17.2261H12.278C11.9039 17.2261 11.5574 17.2935 11.2384 17.4285C10.9256 17.5573 10.6558 17.7382 10.4288 17.9713C10.208 18.2043 10.0332 18.4773 9.90442 18.7901C9.78175 19.1029 9.72042 19.4494 9.72042 19.8297V23.7489C9.72042 24.2641 9.57628 24.5954 9.28801 24.7426C8.99974 24.8836 8.57041 24.9542 8 24.9542V26.6654C8.57041 26.6654 8.99974 26.742 9.28801 26.8954C9.57628 27.0426 9.72042 27.3677 9.72042 27.8706V31.7898C9.72042 32.1701 9.78175 32.5166 9.90442 32.8294C10.0332 33.1422 10.208 33.4152 10.4288 33.6483C10.6558 33.8813 10.9256 34.0592 11.2384 34.1819C11.5574 34.3107 11.9039 34.3751 12.278 34.3751ZM24.2382 24.1537C24.4774 24.2089 24.7105 24.2917 24.9374 24.4021L25.655 22.5437C25.379 22.4027 25.0969 22.3045 24.8086 22.2493C24.5203 22.1941 24.2443 22.1665 23.9806 22.1665C23.1403 22.1665 22.4135 22.3444 21.8002 22.7001C21.1929 23.0559 20.7329 23.6631 20.4201 24.5218V22.3689H16.5745V24.0893H18.5157V29.2322H16.5745V30.9434H22.343V29.2322H20.4201V27.0978C20.4201 26.5826 20.4937 26.1379 20.6409 25.7638C20.7943 25.3835 21.0059 25.0676 21.2757 24.8162C21.5456 24.5647 21.8646 24.3776 22.2326 24.2549C22.6067 24.1261 23.0054 24.0617 23.4286 24.0617C23.7352 24.0617 24.0051 24.0924 24.2382 24.1537ZM35.7015 22.3689L34.4135 30.9434H32.0583L31.1567 25.7822L30.2366 30.9434H27.8814L26.5934 22.3689H28.461L29.2154 28.1006L30.1354 22.3689H32.1503L33.0795 28.1006L33.8339 22.3689H35.7015ZM39.7312 32.673H38.3143V34.3751H39.7312C40.1053 34.3751 40.4488 34.3107 40.7616 34.1819C41.0744 34.0592 41.3442 33.8813 41.5712 33.6483C41.7981 33.4152 41.9729 33.1422 42.0956 32.8294C42.2244 32.5166 42.2888 32.1701 42.2888 31.7898V27.8338C42.2888 27.3308 42.4329 27.0058 42.7212 26.8586C43.0095 26.7052 43.4357 26.6286 44 26.6286V24.9174C43.4357 24.9174 43.0095 24.8468 42.7212 24.7058C42.4329 24.5586 42.2888 24.2273 42.2888 23.7121V19.7929C42.2888 19.4126 42.2244 19.0661 42.0956 18.7533C41.9729 18.4405 41.7981 18.1706 41.5712 17.9437C41.3442 17.7167 41.0744 17.5419 40.7616 17.4193C40.4488 17.2905 40.1053 17.2261 39.7312 17.2261H38.3143V18.9373H39.7312C40.0562 18.9373 40.277 18.9986 40.3936 19.1213C40.5162 19.2378 40.5776 19.4617 40.5776 19.7929V23.7121C40.5776 24.2887 40.7524 24.7579 41.102 25.1198C41.4516 25.4755 41.8533 25.6963 42.3072 25.7822C42.0802 25.819 41.8625 25.8926 41.654 26.003C41.4516 26.1072 41.2706 26.2514 41.1112 26.4354C40.9578 26.6132 40.829 26.8218 40.7248 27.061C40.6266 27.3002 40.5776 27.5578 40.5776 27.8338V31.7898C40.5776 32.1149 40.5162 32.3418 40.3936 32.4706C40.277 32.6056 40.0562 32.673 39.7312 32.673Z" fill="white"/>
            </svg>
          </span>
            <NavMenuList className='hidden md:flex justify-center'>
              <li className='px-4 py-0'>Blog</li>
              <li className='px-4 py-0'>Community</li>
              <li className='px-4 py-0'>About</li>
              <li className='px-4 py-0'>People</li>
              <li className='px-6 py-0 '><ThemeToggleButton themeMode={props.themeMode} onChangeThemeMode={props.onToggleMode}/></li>
            </NavMenuList>
        </div>
    </NavBarWrap>
}

export default NavBar;