function InfoIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="currentColor"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M5.625 13.757h.625V9.243h-.625A.625.625 0 0 1 5 8.618V7.125c0-.345.28-.625.625-.625h3.5c.345 0 .625.28.625.625v6.632h.625c.345 0 .625.28.625.625v1.493c0 .345-.28.625-.625.625h-4.75A.625.625 0 0 1 5 15.875v-1.493c0-.345.28-.625.625-.625ZM8 .5A2.25 2.25 0 1 0 8 5 2.25 2.25 0 0 0 8 .5Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default InfoIcon;
