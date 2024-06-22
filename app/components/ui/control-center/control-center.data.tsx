import { IoIosBluetooth, IoIosWifi } from "react-icons/io";

export const items = [
  {
    icon: <IoIosWifi className="text-white" />,
    label: "Wi-Fi",
    status: "Home",
  },
  {
    icon: <IoIosBluetooth className="text-white" />,
    label: "Bluetooth",
    status: "On",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className="w-4 h-4 text-white"
      >
        <path
          fill="currentColor"
          d="M 25 5 C 13.414063 5 4 14.414063 4 26 C 4 33.917969 8.394531 40.824219 14.878906 44.398438 C 15.363281 44.664063 15.972656 44.488281 16.238281 44.007813 C 16.503906 43.523438 16.328125 42.914063 15.84375 42.644531 C 9.980469 39.414063 6 33.179688 6 26 C 6 15.496094 14.496094 7 25 7 C 35.503906 7 44 15.496094 44 26 C 44 33.179688 40.019531 39.414063 34.15625 42.644531 C 33.671875 42.914063 33.496094 43.523438 33.761719 44.007813 C 34.027344 44.488281 34.636719 44.664063 35.121094 44.398438 C 41.605469 40.824219 46 33.917969 46 26 C 46 14.414063 36.585938 5 25 5 Z M 25 9 C 15.621094 9 8 16.621094 8 26 C 8 32.410156 11.554688 38 16.808594 40.894531 C 17.289063 41.160156 17.898438 40.984375 18.167969 40.5 C 18.433594 40.019531 18.257813 39.410156 17.773438 39.140625 C 13.140625 36.589844 10 31.671875 10 26 C 10 17.703125 16.703125 11 25 11 C 33.296875 11 40 17.703125 40 26 C 40 31.671875 36.859375 36.589844 32.226563 39.140625 C 31.742188 39.410156 31.566406 40.019531 31.832031 40.5 C 32.101563 40.984375 32.710938 41.160156 33.191406 40.894531 C 38.445313 38 42 32.410156 42 26 C 42 16.621094 34.378906 9 25 9 Z M 25 13 C 17.832031 13 12 18.832031 12 26 C 12 30.898438 14.71875 35.175781 18.734375 37.390625 C 19.21875 37.65625 19.828125 37.480469 20.09375 37 C 20.359375 36.515625 20.183594 35.90625 19.703125 35.640625 C 16.304688 33.765625 14 30.160156 14 26 C 14 19.914063 18.914063 15 25 15 C 31.085938 15 36 19.914063 36 26 C 36 30.160156 33.695313 33.765625 30.296875 35.640625 C 29.816406 35.90625 29.640625 36.515625 29.90625 37 C 30.171875 37.480469 30.78125 37.65625 31.265625 37.390625 C 35.28125 35.175781 38 30.898438 38 26 C 38 18.832031 32.167969 13 25 13 Z M 25 17 C 20.042969 17 16 21.042969 16 26 C 16 29.390625 17.882813 32.351563 20.660156 33.886719 C 20.976563 34.0625 21.359375 34.058594 21.667969 33.871094 C 21.976563 33.6875 22.164063 33.351563 22.15625 32.992188 C 22.144531 32.628906 21.945313 32.304688 21.625 32.132813 C 19.464844 30.941406 18 28.648438 18 26 C 18 22.121094 21.121094 19 25 19 C 28.878906 19 32 22.121094 32 26 C 32 28.648438 30.535156 30.941406 28.375 32.132813 C 28.054688 32.304688 27.855469 32.628906 27.84375 32.992188 C 27.835938 33.351563 28.023438 33.6875 28.332031 33.871094 C 28.640625 34.058594 29.023438 34.0625 29.339844 33.886719 C 32.117188 32.351563 34 29.390625 34 26 C 34 21.042969 29.957031 17 25 17 Z M 25 21 C 22.25 21 20 23.25 20 26 C 20 27.882813 21.0625 29.519531 22.597656 30.363281 C 23.082031 30.632813 23.691406 30.457031 23.957031 29.972656 C 24.222656 29.488281 24.046875 28.878906 23.5625 28.613281 C 22.632813 28.097656 22 27.136719 22 26 C 22 24.332031 23.332031 23 25 23 C 26.667969 23 28 24.332031 28 26 C 28 27.136719 27.367188 28.097656 26.4375 28.613281 C 25.953125 28.878906 25.777344 29.488281 26.042969 29.972656 C 26.308594 30.457031 26.917969 30.632813 27.402344 30.363281 C 28.9375 29.519531 30 27.882813 30 26 C 30 23.25 27.75 21 25 21 Z M 25 25 C 24.449219 25 24 25.449219 24 26 C 24 26.550781 24.449219 27 25 27 C 25.550781 27 26 26.550781 26 26 C 26 25.449219 25.550781 25 25 25 Z"
        />
      </svg>
    ),
    label: "AirDrop",
    status: "Contacts Only",
  },
];
