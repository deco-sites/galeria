import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function SocialIcons({ socialMedia }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="flex flex-col justify-center space-x-5 w-full">
          <div
            className="relative group flex flex-col md:flex-row items-center cursor-pointer overflow-hidden w-full"
          >
            <div className="flex justify-end items-center gap-x-[13px] group-hover:translate-y-[-100%] transition-transform duration-300 ease-in-out py-5 w-full">
              <p className="hidden md:block text-sm font-helvetica text-white">
                {socialMedia.text}
              </p>
              <svg className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#FFFFFF" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
              </svg>
            </div>
      
            {/* Botões ou Ícones (revelados ao passar o mouse) */}
            <div className="absolute flex justify-end items-center gap-x-4 top-full left-0 right-0 group-hover:top-0 transition-all duration-300 ease-in-out">
              {socialMedia?.socials.map((social) => (
                <a href={social.url} target="_blank">
                  
                  {social.type === 'Instagram' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 21H7.5C5.0187 21 3 18.9813 3 16.5V7.5C3 5.0187 5.0187 3 7.5 3H16.5C18.9813 3 21 5.0187 21 7.5V16.5C21 18.9813 18.9813 21 16.5 21ZM7.5 4.5C5.8458 4.5 4.5 5.8458 4.5 7.5V16.5C4.5 18.1542 5.8458 19.5 7.5 19.5H16.5C18.1542 19.5 19.5 18.1542 19.5 16.5V7.5C19.5 5.8458 18.1542 4.5 16.5 4.5H7.5Z" fill="white"></path>
                      <path d="M12 16.35C9.60142 16.35 7.65002 14.3986 7.65002 12C7.65002 9.60142 9.60142 7.65002 12 7.65002C14.3986 7.65002 16.35 9.60142 16.35 12C16.35 14.3986 14.3986 16.35 12 16.35ZM12 9.08162C10.3908 9.08162 9.08162 10.3908 9.08162 12C9.08162 13.6092 10.3908 14.9184 12 14.9184C13.6092 14.9184 14.9184 13.6092 14.9184 12C14.9184 10.3908 13.6092 9.08162 12 9.08162Z" fill="white"></path>
                      <path d="M16.95 8.1C17.5299 8.1 18 7.6299 18 7.05C18 6.4701 17.5299 6 16.95 6C16.3701 6 15.9 6.4701 15.9 7.05C15.9 7.6299 16.3701 8.1 16.95 8.1Z" fill="white"></path>
                    </svg>
                  )}
                  
                  {social.type === 'TikTok' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.66639 21.4995C7.99399 21.4803 6.42909 20.8102 5.25999 19.6124C3.89779 18.2162 3.26959 16.3068 3.53659 14.3735C3.89219 11.7971 5.75479 9.74085 8.28169 9.13515C8.38879 9.10955 8.49829 9.09655 8.60729 9.09655C8.93689 9.09655 9.24869 9.21165 9.50519 9.42855C9.82779 9.70135 9.99999 10.1128 9.99999 10.5353V12.0839C9.99999 12.6796 9.63179 13.2121 9.08379 13.4092C8.90249 13.4744 8.73319 13.5668 8.58049 13.6838C7.75079 14.32 7.58899 15.5196 8.21989 16.3578C8.57209 16.8253 9.12929 17.1055 9.71019 17.1076C10.2164 17.1076 10.6868 16.9117 11.0418 16.556C11.4 16.1969 11.5982 15.7182 11.6001 15.2079V3.76675C11.6 2.90145 12.3015 2.19995 13.1668 2.19995H14.6309C15.387 2.19995 16 2.81295 16 3.56905V3.71155C16.1873 5.49875 17.6877 6.17805 18.9136 6.43405C18.9649 6.44465 19.0186 6.45445 19.0726 6.46325C19.8418 6.58765 20.4 7.23085 20.4 7.99285V9.33965C20.4 9.62285 20.3355 9.90535 20.1924 10.1497C19.8983 10.6517 19.3698 10.9412 18.8125 10.9412C18.7443 10.9412 18.6755 10.9368 18.6078 10.9281C17.7284 10.8156 16.8754 10.5653 16.0724 10.1842L16 10.1497V15.2309C15.9999 16.908 15.3049 18.542 14.0932 19.7141C12.9031 20.8657 11.3314 21.4998 9.66829 21.5H9.74029L9.66639 21.4995ZM8.53759 10.4493C6.61399 10.9431 5.19529 12.5441 4.92339 14.5281C4.71609 16.0398 5.20369 17.5329 6.26119 18.6245C7.16889 19.5609 8.38389 20.085 9.68249 20.1L9.68099 20.1003C10.9742 20.1003 12.1953 19.6084 13.1196 18.7155C14.0603 17.8066 14.5999 16.5394 14.6 15.2388V8.93725C14.6 8.67475 14.7464 8.43655 14.9821 8.31575C15.0825 8.26445 15.1952 8.23725 15.308 8.23725C15.455 8.23725 15.5961 8.28145 15.7161 8.36515C16.6266 9.00015 17.6949 9.41085 18.8055 9.55295C18.8137 9.55395 18.8216 9.55445 18.8291 9.55445C18.8714 9.55445 18.9107 9.53965 18.9428 9.51175C18.9802 9.47925 19 9.43595 19 9.38675V8.00985C19 7.92495 18.9276 7.87455 18.8603 7.86385C18.7865 7.85185 18.7128 7.83845 18.6394 7.82335C16.2669 7.32835 14.7955 5.87405 14.6028 3.83365C14.6018 3.81265 14.6009 3.79145 14.5999 3.77035L14.6 3.59995H13.1667C13.0746 3.59995 13 3.67465 13 3.76665V15.1773C12.9969 16.0677 12.6532 16.9034 12.0322 17.5304C11.4128 18.1557 10.5906 18.5 9.71709 18.5H9.70509C8.68949 18.4964 7.71629 18.0041 7.10209 17.1831C5.90249 15.5778 6.36039 13.2107 8.18829 12.2208C8.31049 12.1546 8.43849 12.0996 8.56849 12.0505L8.59999 12.0385V10.4333L8.53759 10.4493Z" fill="white"></path>
                    </svg>
                  )}
                  
                  {social.type === 'YouTube' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3666 20C11.7912 20 11.5571 19.9962 11.0906 19.9886L10.6849 19.9821C6.41491 19.9066 5.07251 19.8401 4.15411 19.6586C3.42351 19.5168 2.78671 19.1957 2.31221 18.7301C1.93571 18.3685 1.64901 17.8507 1.43521 17.1461C1.25651 16.5742 1.19341 16.0796 1.11131 15.1169L1.10991 15.0978C0.96321 12.5636 0.96351 10.7638 1.11091 8.886C1.11151 8.8768 1.11251 8.8681 1.11351 8.8593C1.12581 8.7547 1.13751 8.6478 1.14931 8.5397C1.27071 7.4317 1.42191 6.0528 2.42291 5.1627C2.94331 4.704 3.55031 4.4097 4.22651 4.2884C5.31481 4.0902 9.02291 4 12.0077 4C14.9918 4 18.7003 4.0903 19.7911 4.2887C20.641 4.4418 21.4385 4.8999 21.9246 5.5141C21.9371 5.5298 21.9488 5.546 21.9599 5.5627C22.7873 6.8112 22.8777 8.2716 22.9503 9.4451C22.9577 9.5647 22.965 9.6818 22.9729 9.7958C23.0087 10.3923 23.0091 13.6012 22.9733 14.1969C22.8485 16.0276 22.7436 16.8216 22.4029 17.6293C22.1923 18.1389 21.9872 18.4497 21.646 18.7766C21.1211 19.2697 20.4632 19.5934 19.7441 19.7118C19.7215 19.7155 19.6988 19.7182 19.6759 19.7198C17.1564 19.9015 15.2454 20 12.3666 20ZM12.0077 5.4177C8.02911 5.4177 5.21661 5.5507 4.49481 5.6821C4.08361 5.7559 3.72861 5.9284 3.40981 6.2094C2.81861 6.7351 2.70971 7.7286 2.60441 8.6895L2.60181 8.7135C2.59101 8.8117 2.58031 8.9089 2.56911 9.0046C2.42791 10.8127 2.42831 12.551 2.57021 15.0083C2.65231 15.9683 2.70721 16.324 2.83741 16.7407C2.97691 17.2 3.15351 17.5419 3.34791 17.7285C3.62001 17.9954 3.99921 18.1825 4.44411 18.2688C5.24061 18.4262 6.64581 18.4925 10.7086 18.5644C11.4865 18.5764 12.1701 18.5822 12.7985 18.5822C15.2685 18.5822 17.0017 18.4901 19.5252 18.3089L19.536 18.3075C19.9475 18.2327 20.3232 18.0446 20.6223 17.7635C20.7929 17.5999 20.8945 17.4652 21.0464 17.0975C21.2953 16.5073 21.3913 15.8927 21.5128 14.1089C21.5449 13.5758 21.5446 10.4178 21.5125 9.8843C21.5048 9.7732 21.4974 9.6528 21.4897 9.5298C21.4248 8.4812 21.3513 7.2926 20.7491 6.3599L20.7457 6.3547L20.7417 6.35C20.4702 6.0247 20.003 5.7689 19.5224 5.6824C18.8169 5.5541 15.9434 5.4177 12.0077 5.4177Z" fill="white"></path>
                      <path d="M15.8308 12.5248C16.2028 12.3388 16.2026 11.8082 15.8312 11.621C13.6924 10.5432 11.869 9.51851 9.7658 8.47411C9.4164 8.30061 9 8.54671 9 8.92741V15.1476C9 15.5322 9.4224 15.7785 9.7722 15.5971C11.7705 14.5606 14.4497 13.2155 15.8308 12.5248Z" fill="white"></path>
                    </svg>
                  )}
                  
                  {social.type === 'LinkedIn' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 21H7.5C5.0187 21 3 18.9813 3 16.5V7.5C3 5.0187 5.0187 3 7.5 3H16.5C18.9813 3 21 5.0187 21 7.5V16.5C21 18.9813 18.9813 21 16.5 21ZM7.5 4.5C5.8458 4.5 4.5 5.8458 4.5 7.5V16.5C4.5 18.1542 5.8458 19.5 7.5 19.5H16.5C18.1542 19.5 19.5 18.1542 19.5 16.5V7.5C19.5 5.8458 18.1542 4.5 16.5 4.5H7.5Z" fill="white"></path>
                      <path d="M9 10.4322V15.75C9 16.1642 8.6642 16.5 8.25 16.5C7.8358 16.5 7.5 16.1642 7.5 15.75V10.4322C7.5 10.018 7.8358 9.68215 8.25 9.68215C8.6642 9.68215 9 10.018 9 10.4322ZM8.25 7.19995C7.8358 7.19995 7.5 7.53575 7.5 7.94995V8.09995C7.5 8.51415 7.8358 8.84995 8.25 8.84995C8.6642 8.84995 9 8.51415 9 8.09995V7.94995C9 7.53575 8.6642 7.19995 8.25 7.19995ZM14.4779 9.78265C13.7281 9.63535 12.8027 9.83115 11.9965 10.4658C11.9776 10.0684 11.6521 9.75125 11.2501 9.75125C10.8359 9.75125 10.5001 10.0871 10.5001 10.5013V15.75C10.5001 16.1642 10.8359 16.5 11.2501 16.5C11.6643 16.5 12.0001 16.1642 12.0001 15.75V12.9521C12.0088 12.9348 12.0197 12.9194 12.0272 12.9012C12.5418 11.6425 13.504 11.12 14.1887 11.2546C14.7043 11.3559 15.0001 11.8231 15.0001 12.5363V15.75C15.0001 16.1642 15.3359 16.5 15.7501 16.5C16.1643 16.5 16.5001 16.1642 16.5001 15.75V12.5363C16.5 11.1049 15.7063 10.0241 14.4779 9.78265Z" fill="white"></path>
                    </svg>
                  )}

                </a>
              ))}
            </div>
          </div>
      </div>
  
      <Script />
    </>
  );
}

export default SocialIcons;