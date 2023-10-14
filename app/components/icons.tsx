interface IIconsProps {
  name: string;
  className: string;
}
export function Icons({ name, className }: IIconsProps) {
  switch (name) {
    case "apple":
      return (
        <svg
          className={className}
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{
              mixBlendMode: "hard-light",
            }}
            opacity="0.76"
            filter="url(#filter0_d_0_69)"
          >
            <path
              d="M9.94596 4.90342C10.254 4.53572 10.4677 4.03386 10.4677 3.52703C10.4677 3.45746 10.4627 3.3879 10.4478 3.33324C9.9559 3.35311 9.35963 3.66119 9.00186 4.07858C8.7236 4.39659 8.46522 4.90342 8.46522 5.41026C8.46522 5.48976 8.47516 5.56429 8.48509 5.58914C8.51491 5.59411 8.5646 5.60404 8.61429 5.60404C9.06149 5.60404 9.61801 5.30591 9.94596 4.90342ZM10.2988 5.70839C9.55342 5.70839 8.95217 6.16057 8.5646 6.16057C8.15217 6.16057 7.61553 5.73821 6.96957 5.73821C5.74224 5.73821 4.5 6.75187 4.5 8.65994C4.5 9.85249 4.95714 11.1096 5.52857 11.9196C6.01553 12.6053 6.44286 13.1668 7.05404 13.1668C7.66522 13.1668 7.93354 12.7643 8.68385 12.7643C9.45404 12.7643 9.62298 13.1568 10.2988 13.1568C10.9646 13.1568 11.4068 12.5457 11.8242 11.9444C12.2963 11.2537 12.4901 10.5829 12.5 10.5481C12.4602 10.5382 11.1832 10.0165 11.1832 8.56057C11.1832 7.29845 12.187 6.73199 12.2416 6.68727C11.5857 5.73821 10.577 5.70839 10.2988 5.70839Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_69"
              x="1.73714"
              y="1.95181"
              width="13.5257"
              height="15.3593"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.38143" />
              <feGaussianBlur stdDeviation="1.38143" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_69"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_69"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );

    case "battery":
      return (
        <svg
          className={className}
          viewBox="0 0 19 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{
              mixBlendMode: "hard-light",
            }}
            opacity="0.76"
            filter="url(#filter0_d_0_86)"
          >
            <path
              d="M3.54785 12.3633H11.8892C12.8613 12.3633 13.5542 12.2559 14.0537 11.7563C14.5479 11.2622 14.6499 10.5801 14.6499 9.60254V8.15771C14.6499 7.18018 14.5479 6.49268 14.0537 5.99854C13.5542 5.49902 12.8613 5.3916 11.8892 5.3916H3.51562C2.58105 5.3916 1.88818 5.50439 1.38867 5.99854C0.894531 6.49805 0.787109 7.18555 0.787109 8.12012V9.60254C0.787109 10.5801 0.88916 11.2622 1.3833 11.7563C1.88818 12.2559 2.57568 12.3633 3.54785 12.3633ZM3.40283 11.6973C2.77441 11.6973 2.20508 11.6006 1.87207 11.2676C1.54443 10.9399 1.45312 10.3813 1.45312 9.74756V8.04492C1.45312 7.38428 1.54443 6.81494 1.87207 6.48193C2.19971 6.14893 2.77979 6.05762 3.44043 6.05762H12.0342C12.668 6.05762 13.2373 6.15967 13.5649 6.4873C13.8926 6.81494 13.9893 7.37354 13.9893 8.0127V9.74756C13.9893 10.3813 13.8926 10.9399 13.5649 11.2676C13.2373 11.6006 12.668 11.6973 12.0342 11.6973H3.40283ZM3.22021 11.144H12.2275C12.7109 11.144 12.9956 11.0742 13.1782 10.8916C13.3608 10.7036 13.436 10.4136 13.436 9.93555V7.81934C13.436 7.33594 13.3608 7.05127 13.1782 6.86865C12.9956 6.68604 12.7056 6.61084 12.2275 6.61084H3.25244C2.73682 6.61084 2.44141 6.68604 2.26416 6.86328C2.08691 7.0459 2.00635 7.34131 2.00635 7.85156V9.93555C2.00635 10.4243 2.08691 10.7036 2.26416 10.8916C2.44678 11.0688 2.74219 11.144 3.22021 11.144ZM15.2783 10.188C15.6758 10.1611 16.2129 9.65088 16.2129 8.87744C16.2129 8.10938 15.6758 7.59375 15.2783 7.57227V10.188Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_86"
              x="-1.97575"
              y="4.01017"
              width="20.9515"
              height="12.4974"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.38143" />
              <feGaussianBlur stdDeviation="1.38143" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_86"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_86"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "wifi":
      return (
        <svg
          className={className}
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{
              mixBlendMode: "hard-light",
            }}
            opacity="0.76"
            filter="url(#filter0_d_0_88)"
          >
            <path
              d="M4.32422 8.44141C4.40625 8.52344 4.53516 8.52344 4.61719 8.43359C5.58203 7.41016 6.85156 6.87109 8.26953 6.87109C9.69922 6.87109 10.9727 7.41406 11.9297 8.4375C12.0117 8.51953 12.1328 8.51563 12.2187 8.42969L12.7656 7.88281C12.8437 7.80469 12.8398 7.70703 12.7773 7.62891C11.8398 6.47266 10.0898 5.64063 8.26953 5.64063C6.45312 5.64063 4.69922 6.47266 3.76172 7.62891C3.69922 7.70703 3.70312 7.80469 3.77734 7.88281L4.32422 8.44141ZM5.95703 10.0664C6.05078 10.1563 6.16797 10.1445 6.25781 10.0508C6.73437 9.52734 7.49609 9.16016 8.26953 9.16406C9.05078 9.16016 9.8125 9.53906 10.3008 10.0625C10.3789 10.1523 10.4922 10.1484 10.5859 10.0625L11.1992 9.46094C11.2734 9.39063 11.2773 9.29297 11.2148 9.21484C10.6055 8.48047 9.49219 7.94531 8.26953 7.94531C7.04687 7.94531 5.93359 8.48047 5.32812 9.21484C5.26172 9.29297 5.26562 9.38672 5.34375 9.46094L5.95703 10.0664ZM8.26953 12.2266C8.36719 12.2266 8.44922 12.1836 8.60547 12.0312L9.5625 11.1094C9.63281 11.043 9.64844 10.9375 9.58594 10.8594C9.3125 10.5117 8.82031 10.2344 8.26953 10.2344C7.70703 10.2344 7.20703 10.5273 6.9375 10.8906C6.89062 10.9609 6.91406 11.043 6.98047 11.1094L7.9375 12.0312C8.09375 12.1797 8.17578 12.2266 8.26953 12.2266Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_88"
              x="0.936362"
              y="4.2592"
              width="14.6702"
              height="12.1117"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.38143" />
              <feGaussianBlur stdDeviation="1.38143" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_88"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_88"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "search":
      return (
        <svg
          className={className}
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{
              mixBlendMode: "hard-light",
            }}
            opacity="0.76"
            filter="url(#filter0_d_0_90)"
          >
            <path
              d="M4.39844 8.21875C4.39844 9.97266 5.82422 11.3984 7.57812 11.3984C8.23047 11.3984 8.82812 11.1992 9.32812 10.8594L11.125 12.6562C11.2344 12.7695 11.3867 12.8203 11.5391 12.8203C11.8711 12.8203 12.1094 12.5703 12.1094 12.2461C12.1094 12.0898 12.0547 11.9453 11.9492 11.8359L10.1641 10.0469C10.5352 9.53516 10.7578 8.90234 10.7578 8.21875C10.7578 6.46484 9.33203 5.03906 7.57812 5.03906C5.82422 5.03906 4.39844 6.46484 4.39844 8.21875ZM5.22656 8.21875C5.22656 6.92188 6.27734 5.86719 7.57812 5.86719C8.875 5.86719 9.92969 6.92188 9.92969 8.21875C9.92969 9.51563 8.875 10.5703 7.57812 10.5703C6.27734 10.5703 5.22656 9.51563 5.22656 8.21875Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_90"
              x="1.63558"
              y="3.65763"
              width="13.2367"
              height="13.307"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.38143" />
              <feGaussianBlur stdDeviation="1.38143" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_90"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_90"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "control":
      return (
        <svg
          className={className}
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{
              mixBlendMode: "hard-light",
            }}
            opacity="0.76"
            filter="url(#filter0_d_0_92)"
          >
            <path
              d="M5.88281 8.80078H10.2266C11.2812 8.80078 12.1133 8.0625 12.1133 6.96484C12.1133 5.86719 11.2812 5.12891 10.2266 5.12891H5.88281C4.82812 5.12891 3.99609 5.86719 3.99609 6.96484C3.99609 8.0625 4.82812 8.80078 5.88281 8.80078ZM5.88281 8.09766C5.24609 8.09766 4.69922 7.63672 4.69922 6.96484C4.69922 6.29297 5.24609 5.83203 5.88281 5.83203H10.2266C10.8633 5.83203 11.4141 6.29297 11.4141 6.96484C11.4141 7.63672 10.8633 8.09766 10.2266 8.09766H5.88281ZM5.88281 7.83984C6.37109 7.84375 6.76172 7.44531 6.76172 6.95703C6.76562 6.47266 6.37109 6.08594 5.88281 6.08594C5.39453 6.08594 5.00781 6.47656 5.00781 6.96094C5.00781 7.44922 5.39453 7.83594 5.88281 7.83984ZM5.72266 12.7227H10.3867C11.3477 12.7227 12.1133 12.0469 12.1133 11.0625C12.1133 10.0781 11.3477 9.39844 10.3867 9.39844H5.72266C4.76172 9.39844 3.99609 10.0781 3.99609 11.0625C3.99609 12.0469 4.76172 12.7227 5.72266 12.7227ZM10.4883 12.0273C9.94922 12.0234 9.52344 11.5938 9.52344 11.0586C9.52344 10.5234 9.94922 10.0938 10.4883 10.0938C11.0234 10.0938 11.4609 10.5234 11.457 11.0508C11.4531 11.5938 11.0195 12.0312 10.4883 12.0273Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_92"
              x="1.23324"
              y="3.74748"
              width="13.6429"
              height="13.1195"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.38143" />
              <feGaussianBlur stdDeviation="1.38143" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_92"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_92"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
  }
}
