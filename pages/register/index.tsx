import * as React from 'react'
import styled from 'styled-components'
import TabMenu from '@Components/tabMenu/styled'
import IndividualForm from './individualform'
import BusinessForm from './businessform'
import Image from 'next/image'
import useRegisterUser from '@Hooks/use-register-user'
import { useRouter } from 'next/router'

const OuterWrap = styled.div `
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavBar = styled.nav `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  .nav-bar__inner {
    width: 100%;
    padding: 20px 24px;
    max-width: ${props => props.theme.xLargeWindowSize};
    @media(min-width: ${props => props.theme.screenSize.tablet}) {
      padding: 20px 32px;
    }
  }
`

const InnerWrap = styled.div `
  width: 100%;
  max-width: ${props => props.theme.xLargeWindowSize};
  padding: 60px 0;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    padding: 80px 32px 96px;
  }
`

const HeadText = styled.h1 `
  font-family: var(--font-family-bold);
  font-size: 1.9em;
  line-height: 42px;
  text-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.presentationTextColor};
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 2.7em;
    line-height: 56.88px;
  }
`

const SubHeadText = styled.h4 `
  font-family: var(--font-family-regular);
  font-size: 1.05em;
  color: ${props => props.theme.presentationTextColor};
  text-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.23em;
  }
`

const FeatureHeadText = styled.strong `
  font-family: var(--font-family-medium);
  font-size: 1.05em;
  color: ${props => props.theme.presentationTextColor};
  line-height: 24px;
  text-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.20em;
  }
`

const FeatureDescText = styled.strong `
  font-family: var(--font-family-regular);
  font-size: 1.03em;
  color: ${props => props.theme.presentationTextColor};
  line-height: 24px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.125em;
  }
`

const IlluCtn = styled.div `
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 5px 8px -2px rgba(157, 157, 157, 0.25);
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    min-width: 58px;
    height: 58px;
  }
`

const FormWrap = styled.div `
  width: 100px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 5px 8px -2px rgba(157, 157, 157, 0.25);
  align-self: start;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    border-radius: 7px;
    padding: 41px;
  }
`

interface IFormInput {
  firstname : string;
  lastname?: string;
  email : string;
  phonenumber : string;
  residence : string
}

export const CustomerRegistration = () => {

  const [registerUser,
    {isLoading, isError, isSuccess, error}] = useRegisterUser()
  const [errorState, setErrorState] = React.useState<{message: string, code?: number} | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    if (isError) {
      setErrorState(error)
    } else if (errorState) {
      setErrorState(null)
    }
  }, [isError]);

  React.useEffect(() => {
    // @ts-ignore
    document
      .body
      .classList
      .add("bg-white", "pattern-bg");
  }, [])

  React.useEffect(() => {
    if (isSuccess) {
      router.push('/register/success')
    }
  }, [isSuccess])

  const handleSubmit = async(values : IFormInput, registrationType : 'INDIVIDUAL' | 'BUSINESS') => {
    const payload = {
      personalInfo: {
        firstName: values.firstname,
        lastName: values.lastname
      },
      profileDetails: {
        email: values.email,
        mobileNumber: values.phonenumber,
        residence: values.residence,
        registrationType
      }
    } 
    //@ts-ignore
    await registerUser(payload);
  }

  return <OuterWrap>
    <NavBar>
      <div className="nav-bar__inner">
        <svg width="262" height="52" viewBox="0 0 262 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M81.499 29.3745C81.3688 30.5708 80.8968 31.5229 80.083 32.231C79.2773 32.9308 78.2682 33.2808 77.0557 33.2808C76.3883 33.2808 75.778 33.1709 75.2246 32.9512C74.6712 32.7314 74.1992 32.4263 73.8086 32.0356C73.418 31.645 73.1128 31.1771 72.8931 30.6318C72.6815 30.0785 72.5757 29.4762 72.5757 28.8252V23.9058H70V21.623H72.5757V17.0698H75.1025V21.623H79.8755V23.9058H75.1025V28.8252C75.1025 29.5576 75.2816 30.1029 75.6396 30.4609C75.9977 30.819 76.4697 30.998 77.0557 30.998C77.7718 30.998 78.3049 30.7905 78.6548 30.3755C79.0047 29.9604 79.2122 29.46 79.2773 28.874L81.499 29.3745ZM94.4263 33H91.8994V25.981C91.8994 25.0939 91.7326 24.4795 91.3989 24.1377C91.0653 23.7959 90.5811 23.625 89.9463 23.625C89.0104 23.625 88.2454 24.0034 87.6514 24.7603C87.0654 25.5171 86.7725 26.5628 86.7725 27.8975V33H84.2456V17.0698H86.7725V24.4795C87.0247 23.4948 87.4927 22.7298 88.1763 22.1846C88.8599 21.6312 89.7021 21.3545 90.7031 21.3545C91.8669 21.3545 92.7783 21.7329 93.4375 22.4897C94.0967 23.2466 94.4263 24.4103 94.4263 25.981V33ZM99.6143 28.2759C99.7363 29.0571 100.107 29.7082 100.725 30.229C101.352 30.7417 102.19 30.998 103.24 30.998C104.062 30.998 104.774 30.8719 105.376 30.6196C105.986 30.3592 106.511 30.0174 106.951 29.5942L108.245 31.3765C107.512 32.1089 106.735 32.6094 105.913 32.8779C105.099 33.1465 104.208 33.2808 103.24 33.2808C102.361 33.2808 101.543 33.1343 100.786 32.8413C100.029 32.5483 99.3742 32.1414 98.8208 31.6206C98.2674 31.0916 97.832 30.465 97.5146 29.7407C97.2054 29.0164 97.0508 28.2108 97.0508 27.3237C97.0508 26.4611 97.1932 25.6676 97.478 24.9434C97.771 24.2109 98.1779 23.5802 98.6987 23.0513C99.2277 22.5142 99.8584 22.0991 100.591 21.8062C101.323 21.505 102.133 21.3545 103.02 21.3545C103.94 21.3545 104.774 21.5132 105.522 21.8306C106.271 22.1398 106.91 22.5915 107.439 23.1855C107.976 23.7796 108.395 24.508 108.696 25.3706C108.997 26.2251 109.148 27.1935 109.148 28.2759H99.6143ZM106.292 26.0542C106.161 25.3218 105.783 24.7358 105.156 24.2964C104.53 23.8488 103.818 23.625 103.02 23.625C102.222 23.625 101.506 23.8488 100.872 24.2964C100.237 24.7358 99.8543 25.3218 99.7241 26.0542H106.292ZM122.039 24.3208C121.737 24.1743 121.428 24.0645 121.111 23.9912C120.802 23.9098 120.444 23.8691 120.037 23.8691C119.475 23.8691 118.946 23.9546 118.45 24.1255C117.961 24.2882 117.538 24.5365 117.18 24.8701C116.822 25.2038 116.541 25.6229 116.338 26.1274C116.143 26.6239 116.045 27.2139 116.045 27.8975V30.7295H118.596V33H110.942V30.7295H113.518V23.9058H110.942V21.623H116.045V24.4795C116.46 23.3402 117.07 22.5345 117.876 22.0625C118.69 21.5905 119.654 21.3545 120.769 21.3545C121.119 21.3545 121.485 21.3911 121.868 21.4644C122.25 21.5376 122.625 21.6678 122.991 21.855L122.039 24.3208ZM136.321 21.623L134.612 33H131.487L130.291 26.1519L129.07 33H125.945L124.236 21.623H126.714L127.715 29.228L128.936 21.623H131.609L132.842 29.228L133.843 21.623H136.321ZM138.188 29.7285C138.188 29.0612 138.368 28.4793 138.726 27.9829C139.084 27.4784 139.552 27.0592 140.129 26.7256C140.715 26.3919 141.383 26.1437 142.131 25.981C142.888 25.8101 143.657 25.7246 144.438 25.7246C144.87 25.7246 145.24 25.7327 145.549 25.749C145.859 25.7653 146.172 25.7897 146.489 25.8223V25.3706C146.489 24.7765 146.257 24.333 145.793 24.04C145.338 23.7471 144.736 23.6006 143.987 23.6006C143.303 23.6006 142.607 23.6982 141.899 23.8936C141.191 24.0807 140.52 24.3574 139.885 24.7236L138.86 22.7461C139.609 22.3148 140.41 21.9771 141.265 21.7329C142.127 21.4806 143.035 21.3545 143.987 21.3545C144.605 21.3545 145.212 21.4237 145.806 21.562C146.408 21.7004 146.945 21.9282 147.417 22.2456C147.897 22.563 148.28 22.978 148.564 23.4907C148.849 23.9953 148.992 24.6219 148.992 25.3706V33H146.489V31.3276C146.09 31.9461 145.5 32.4263 144.719 32.7681C143.946 33.1099 143.112 33.2808 142.217 33.2808C141.663 33.2808 141.139 33.2035 140.642 33.0488C140.154 32.9023 139.731 32.6785 139.373 32.3774C139.014 32.0763 138.726 31.7061 138.506 31.2666C138.294 30.819 138.188 30.3063 138.188 29.7285ZM142.864 31.0225C143.36 31.0225 143.824 30.9614 144.255 30.8394C144.695 30.7091 145.081 30.5342 145.415 30.3145C145.749 30.0866 146.009 29.814 146.196 29.4966C146.392 29.1792 146.489 28.8293 146.489 28.4468V28.0195C146.09 27.9544 145.716 27.9178 145.366 27.9097C145.016 27.9015 144.707 27.8975 144.438 27.8975C143.201 27.8975 142.266 28.0602 141.631 28.3857C141.004 28.7113 140.691 29.1141 140.691 29.5942C140.691 30.5464 141.415 31.0225 142.864 31.0225ZM162.664 33H160.137V25.981C160.137 25.0939 159.97 24.4795 159.636 24.1377C159.303 23.7959 158.818 23.625 158.184 23.625C157.248 23.625 156.483 24.0034 155.889 24.7603C155.303 25.5171 155.01 26.5628 155.01 27.8975V33H152.483V21.623H155.01V24.4795C155.262 23.4948 155.73 22.7298 156.414 22.1846C157.097 21.6312 157.939 21.3545 158.94 21.3545C160.104 21.3545 161.016 21.7329 161.675 22.4897C162.334 23.2466 162.664 24.4103 162.664 25.981V33ZM176.311 33H173.784V31.9502C173.296 32.3815 172.804 32.7111 172.307 32.939C171.811 33.1668 171.245 33.2808 170.61 33.2808C169.878 33.2808 169.198 33.1343 168.572 32.8413C167.945 32.5483 167.404 32.1414 166.948 31.6206C166.501 31.0916 166.147 30.4609 165.886 29.7285C165.634 28.9961 165.508 28.1945 165.508 27.3237C165.508 26.4611 165.634 25.6636 165.886 24.9312C166.147 24.1906 166.501 23.5599 166.948 23.0391C167.404 22.5101 167.945 22.0991 168.572 21.8062C169.198 21.505 169.878 21.3545 170.61 21.3545C171.245 21.3545 171.811 21.4644 172.307 21.6841C172.804 21.8957 173.296 22.2171 173.784 22.6484V19.3525H171.587V17.0698H176.311V33ZM173.784 24.6504C173.483 24.3167 173.092 24.0645 172.612 23.8936C172.14 23.7145 171.689 23.625 171.257 23.625C170.305 23.625 169.528 23.9668 168.926 24.6504C168.332 25.334 168.035 26.2251 168.035 27.3237C168.035 28.4224 168.332 29.3094 168.926 29.9849C169.528 30.6603 170.305 30.998 171.257 30.998C171.689 30.998 172.14 30.9126 172.612 30.7417C173.092 30.5627 173.483 30.3063 173.784 29.9727V24.6504ZM179.131 29.7285C179.131 29.0612 179.31 28.4793 179.668 27.9829C180.026 27.4784 180.494 27.0592 181.072 26.7256C181.658 26.3919 182.325 26.1437 183.074 25.981C183.831 25.8101 184.6 25.7246 185.381 25.7246C185.812 25.7246 186.182 25.7327 186.492 25.749C186.801 25.7653 187.114 25.7897 187.432 25.8223V25.3706C187.432 24.7765 187.2 24.333 186.736 24.04C186.28 23.7471 185.678 23.6006 184.929 23.6006C184.246 23.6006 183.55 23.6982 182.842 23.8936C182.134 24.0807 181.462 24.3574 180.828 24.7236L179.802 22.7461C180.551 22.3148 181.353 21.9771 182.207 21.7329C183.07 21.4806 183.977 21.3545 184.929 21.3545C185.548 21.3545 186.154 21.4237 186.748 21.562C187.35 21.7004 187.887 21.9282 188.359 22.2456C188.84 22.563 189.222 22.978 189.507 23.4907C189.792 23.9953 189.934 24.6219 189.934 25.3706V33H187.432V31.3276C187.033 31.9461 186.443 32.4263 185.662 32.7681C184.889 33.1099 184.054 33.2808 183.159 33.2808C182.606 33.2808 182.081 33.2035 181.584 33.0488C181.096 32.9023 180.673 32.6785 180.315 32.3774C179.957 32.0763 179.668 31.7061 179.448 31.2666C179.237 30.819 179.131 30.3063 179.131 29.7285ZM183.806 31.0225C184.303 31.0225 184.766 30.9614 185.198 30.8394C185.637 30.7091 186.024 30.5342 186.357 30.3145C186.691 30.0866 186.951 29.814 187.139 29.4966C187.334 29.1792 187.432 28.8293 187.432 28.4468V28.0195C187.033 27.9544 186.659 27.9178 186.309 27.9097C185.959 27.9015 185.649 27.8975 185.381 27.8975C184.144 27.8975 183.208 28.0602 182.573 28.3857C181.947 28.7113 181.633 29.1141 181.633 29.5942C181.633 30.5464 182.358 31.0225 183.806 31.0225ZM203.606 33H201.079V25.981C201.079 25.0939 200.912 24.4795 200.579 24.1377C200.245 23.7959 199.761 23.625 199.126 23.625C198.19 23.625 197.425 24.0034 196.831 24.7603C196.245 25.5171 195.952 26.5628 195.952 27.8975V33H193.425V21.623H195.952V24.4795C196.204 23.4948 196.672 22.7298 197.356 22.1846C198.04 21.6312 198.882 21.3545 199.883 21.3545C201.047 21.3545 201.958 21.7329 202.617 22.4897C203.276 23.2466 203.606 24.4103 203.606 25.981V33ZM217.253 33H214.727V31.9502C214.238 32.3815 213.746 32.7111 213.25 32.939C212.753 33.1668 212.188 33.2808 211.553 33.2808C210.82 33.2808 210.141 33.1343 209.514 32.8413C208.888 32.5483 208.346 32.1414 207.891 31.6206C207.443 31.0916 207.089 30.4609 206.829 29.7285C206.576 28.9961 206.45 28.1945 206.45 27.3237C206.45 26.4611 206.576 25.6636 206.829 24.9312C207.089 24.1906 207.443 23.5599 207.891 23.0391C208.346 22.5101 208.888 22.0991 209.514 21.8062C210.141 21.505 210.82 21.3545 211.553 21.3545C212.188 21.3545 212.753 21.4644 213.25 21.6841C213.746 21.8957 214.238 22.2171 214.727 22.6484V19.3525H212.529V17.0698H217.253V33ZM214.727 24.6504C214.425 24.3167 214.035 24.0645 213.555 23.8936C213.083 23.7145 212.631 23.625 212.2 23.625C211.248 23.625 210.47 23.9668 209.868 24.6504C209.274 25.334 208.977 26.2251 208.977 27.3237C208.977 28.4224 209.274 29.3094 209.868 29.9849C210.47 30.6603 211.248 30.998 212.2 30.998C212.631 30.998 213.083 30.9126 213.555 30.7417C214.035 30.5627 214.425 30.3063 214.727 29.9727V24.6504ZM222.441 28.2759C222.563 29.0571 222.934 29.7082 223.552 30.229C224.179 30.7417 225.017 30.998 226.067 30.998C226.889 30.998 227.601 30.8719 228.203 30.6196C228.813 30.3592 229.338 30.0174 229.778 29.5942L231.072 31.3765C230.339 32.1089 229.562 32.6094 228.74 32.8779C227.926 33.1465 227.035 33.2808 226.067 33.2808C225.188 33.2808 224.37 33.1343 223.613 32.8413C222.856 32.5483 222.201 32.1414 221.648 31.6206C221.095 31.0916 220.659 30.465 220.342 29.7407C220.033 29.0164 219.878 28.2108 219.878 27.3237C219.878 26.4611 220.02 25.6676 220.305 24.9434C220.598 24.2109 221.005 23.5802 221.526 23.0513C222.055 22.5142 222.686 22.0991 223.418 21.8062C224.15 21.505 224.96 21.3545 225.847 21.3545C226.767 21.3545 227.601 21.5132 228.35 21.8306C229.098 22.1398 229.737 22.5915 230.266 23.1855C230.803 23.7796 231.222 24.508 231.523 25.3706C231.825 26.2251 231.975 27.1935 231.975 28.2759H222.441ZM229.119 26.0542C228.988 25.3218 228.61 24.7358 227.983 24.2964C227.357 23.8488 226.645 23.625 225.847 23.625C225.05 23.625 224.333 23.8488 223.699 24.2964C223.064 24.7358 222.681 25.3218 222.551 26.0542H229.119ZM245.146 21.623L240.947 33H237.969L233.77 21.623H236.467L239.47 30.229L242.449 21.623H245.146ZM247.417 35.2705V33H258.794V35.2705H247.417Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52ZM12.3908 34.6011H13.845V32.8542H12.3908C12.0572 32.8542 11.8274 32.785 11.7015 32.6465C11.5819 32.5143 11.5221 32.2814 11.5221 31.9477V27.9252C11.5221 27.6419 11.4686 27.3775 11.3616 27.132C11.2609 26.8865 11.1287 26.6724 10.965 26.4899C10.8076 26.301 10.6219 26.1531 10.4079 26.0461C10.2001 25.9328 9.97981 25.8572 9.74689 25.8195C10.2064 25.7313 10.6156 25.5047 10.9744 25.1396C11.3396 24.7682 11.5221 24.2866 11.5221 23.6949V19.6723C11.5221 19.3323 11.5819 19.0963 11.7015 18.9641C11.8274 18.8256 12.0572 18.7563 12.3908 18.7563H13.845V17H12.3908C12.0068 17 11.6512 17.0692 11.3238 17.2077C11.0028 17.3399 10.7258 17.5256 10.4929 17.7649C10.2662 18.0041 10.0868 18.2842 9.95463 18.6053C9.82873 18.9263 9.76578 19.282 9.76578 19.6723V23.6949C9.76578 24.2236 9.61784 24.5636 9.32197 24.7147C9.0261 24.8594 8.58545 24.9318 8 24.9318V26.6882C8.58545 26.6882 9.0261 26.7669 9.32197 26.9242C9.61784 27.0753 9.76578 27.409 9.76578 27.9252V31.9477C9.76578 32.338 9.82873 32.6937 9.95463 33.0148C10.0868 33.3358 10.2662 33.6159 10.4929 33.8552C10.7258 34.0944 11.0028 34.2769 11.3238 34.4028C11.6512 34.535 12.0068 34.6011 12.3908 34.6011ZM24.6663 24.1103C24.9118 24.167 25.151 24.252 25.384 24.3653L26.1205 22.4579C25.8372 22.3131 25.5476 22.2124 25.2518 22.1557C24.9559 22.099 24.6726 22.0707 24.4019 22.0707C23.5395 22.0707 22.7935 22.2533 22.164 22.6184C21.5408 22.9835 21.0687 23.6067 20.7476 24.488V22.2785H16.8006V24.0442H18.793V29.3227H16.8006V31.079H22.7211V29.3227H20.7476V27.132C20.7476 26.6032 20.8231 26.1468 20.9742 25.7628C21.1316 25.3725 21.3488 25.0483 21.6258 24.7902C21.9028 24.5321 22.2301 24.3401 22.6078 24.2142C22.9918 24.082 23.401 24.0159 23.8354 24.0159C24.1501 24.0159 24.4271 24.0474 24.6663 24.1103ZM36.4319 22.2785L35.1099 31.079H32.6926L31.7672 25.7817L30.8229 31.079H28.4056L27.0836 22.2785H29.0005L29.7748 28.1612L30.7191 22.2785H32.787L33.7407 28.1612L34.515 22.2785H36.4319ZM40.5678 32.8542H39.1136V34.6011H40.5678C40.9518 34.6011 41.3043 34.535 41.6253 34.4028C41.9464 34.2769 42.2234 34.0944 42.4563 33.8552C42.6892 33.6159 42.8686 33.3358 42.9945 33.0148C43.1267 32.6937 43.1928 32.338 43.1928 31.9477V27.8874C43.1928 27.3712 43.3408 27.0376 43.6366 26.8865C43.9325 26.7291 44.37 26.6504 44.9492 26.6504V24.8941C44.37 24.8941 43.9325 24.8217 43.6366 24.6769C43.3408 24.5258 43.1928 24.1859 43.1928 23.6571V19.6345C43.1928 19.2442 43.1267 18.8885 42.9945 18.5675C42.8686 18.2464 42.6892 17.9694 42.4563 17.7365C42.2234 17.5036 41.9464 17.3242 41.6253 17.1983C41.3043 17.0661 40.9518 17 40.5678 17H39.1136V18.7563H40.5678C40.9014 18.7563 41.128 18.8193 41.2476 18.9452C41.3735 19.0648 41.4365 19.2946 41.4365 19.6345V23.6571C41.4365 24.2488 41.6159 24.7304 41.9747 25.1018C42.3335 25.4669 42.7459 25.6935 43.2117 25.7817C42.9788 25.8195 42.7553 25.895 42.5413 26.0083C42.3335 26.1153 42.1478 26.2633 41.9842 26.4521C41.8268 26.6347 41.6946 26.8487 41.5876 27.0942C41.4868 27.3397 41.4365 27.6041 41.4365 27.8874V31.9477C41.4365 32.2814 41.3735 32.5143 41.2476 32.6465C41.128 32.785 40.9014 32.8542 40.5678 32.8542Z" fill="white"/>
        </svg>
      </div>
    </NavBar>
    <InnerWrap className='flex flex-col lg:flex-row'>
      <div className="w-full lg:w-1/2 px-4 lg:px-0">
        <HeadText>Enjoy borderless transactions, Join Mulla today!</HeadText>
        <SubHeadText className='mt-3 sm:mt-6'>Send and recieve money across Africa</SubHeadText>
        <div className="flex mt-12">
          <IlluCtn className='hidden sm:flex items-center justify-center'>
            <Image src="/static/wallet.png" alt="wallet" width={28} height={28}/>
          </IlluCtn>
          <IlluCtn className='flex sm:hidden items-center justify-center'>
            <Image src="/static/wallet.png" alt="wallet" width={22} height={22}/>
          </IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Secure payments</FeatureHeadText>
            <FeatureDescText className='mt-1 sm:mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
        <div className="flex mt-8">
          <IlluCtn className='hidden sm:flex items-center justify-center'>
            <Image src="/static/arrow_up_down.png" alt="arrow" width={30} height={30}/>
          </IlluCtn>
          <IlluCtn className='flex sm:hidden items-center justify-center'>
            <Image src="/static/arrow_up_down.png" alt="arrow" width={24} height={24}/>
          </IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Seamless money transfers in around Africa</FeatureHeadText>
            <FeatureDescText className='mt-1 sm:mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
        <div className="flex mt-12">
          <IlluCtn className='hidden sm:flex items-center justify-center'>
            <Image src="/static/badge.png" alt="badge" width={30} height={30}/>
          </IlluCtn>
          <IlluCtn className='flex sm:hidden items-center justify-center'>
            <Image src="/static/badge.png" alt="badge" width={24} height={24}/>
          </IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Premium customer service</FeatureHeadText>
            <FeatureDescText className='mt-1 sm:mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex mt-10 lg:mt-0">
        <FormWrap className='flex-1 lg:m-14'>
          <TabMenu.Group>
            <TabMenu>
              <TabMenu.Header onClick={() => setErrorState(null)} className='sm:px-4'>
                <TabMenu.TabMenuItem className='w-1/2 text-lg' path='/1' isActive={true}>Individual</TabMenu.TabMenuItem>
                <TabMenu.TabMenuItem className='w-1/2 text-lg' path='/2'>Business</TabMenu.TabMenuItem>
              </TabMenu.Header>
              <TabMenu.Body>
                <TabMenu.TabContent className='pt-6' path='/1'>
                  <IndividualForm isError={isError} error={errorState} isLoading={isLoading} onSubmit={(values) => handleSubmit(values, 'INDIVIDUAL')}/>
                </TabMenu.TabContent>
                <TabMenu.TabContent className='pt-6' path='/2'>
                  <BusinessForm isError={isError} error={errorState} isLoading={isLoading} onSubmit={(values) => handleSubmit(values, 'BUSINESS')}></BusinessForm>
                </TabMenu.TabContent>
              </TabMenu.Body>
            </TabMenu>
          </TabMenu.Group>
        </FormWrap>
      </div>
    </InnerWrap>
  </OuterWrap>
}

export default CustomerRegistration