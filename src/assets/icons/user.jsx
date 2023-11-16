function UserIcon({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="currentColor" />
      <defs>
        <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
          <use xlinkHref="#b" transform="scale(.01)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgUlEQVR4nO2dXYhVVRTHf5YWaaZplhRoJWKKGmVSIkhFD/blk0lQIJWaSkyo1EP6YCJ9KVqEwZgYUVHRh0kQURDkg2HjR6iRESnqgzpl+R2T2ZKNa9AOpne85+69zuz1gz8M95459671v/fsc/dee29wHMdxHMdxHMdxnArSB7gXmA0sAppV4e9ZwHg9xmkg1wBzgA3ACUDOo3BMi5p2tTtTHv2BZcBfNZjwfzoGvK6mOnUwHThQhxFF/QlMdUc6zuXAxyUaUdSHQA83pjb6AusaaEa7vvOG//z01IZYIul7/TY6Z6EL8HlEM9r1mb62U2B2AjPa1eRu/JcBwJGEhhwFBropp3kvoRmietsNOcUg4B8DhhwHbnRT4CUDZohqoRsCuwwYIartuRtykwETpKDBZMwTBgyQgh4jYxYbMEAKepmM+ciAAXKWjsds+dKAAVLQF2TMVwYMkILCe8qWVQYMkILCOEy2LDNggBQUhnqzpcmAAVLQU2TMHQYMkIJuI2O6llzEIHXqD+BiMmelASNEtTx1Miww1oARohqTOhlWWGPAjG9SJ8Hat+TfhGaEstPbUyfBGssTGvJG6uAt0gP4MYEZW4HuqYO3ymBgX0Qz9uqYvnMObgV+i2BGMP4Wd6I2hgC/NNCMbbkP1V4IVwDvNKj+KtQQOxfIPcAPJRixEbjbXSiHLsADwGqgrQMmtOmYy31eUN04egEPaoHdpzp94WdViz72oh4TLnuO4ziO4ziOUwEuAYYBE4F5Otvqa2C9dq+0An/rb45WfaxFj3lX/2einqNb6mCqWPQwGnga+ED7nI6X2G0SjPtJz92kFSbhNZ0zuF6X0FgFHIrQy1vUQf0x+WTOEz9vAJ6NvEiAdGAxgWf0g9Lp24KH9NqecvxcOqDQTk0DLqMT0Ucb1pgjgVKywnufC1xJhemts5EOG0iolKRD2nEZOjgrQ1ctWI4xDCuJFG6vZ1bhDm2oNoqSidbpTGKTzNCl9CQzHdOG3wyhWvw1A4mRxGq2cAm7SGetpk6GGNH7mpNkvGogCWJMycpSJxsIXozq0RQLVbYaCFyM6negX+5LYogxvRLLjHAnscdAwGJce2Pddd1pIFipiMbFMGSKgUClIno8hiHPGwhUKqL5MQyZayBQqYiei2HINAOBSkUULu8NZ7SBQKUiGhXDkG5aGJA6WDGuAzE7G5sNBCzGFbVPa2SN+0DlqhPACCLzpoHAxahCbpJUk+wwELwY007gKhIxqpNVlUgJ214kXwAtvIH9BpIhiXXY0izfUFm+2UBSJJG2AMMxRii3XJB4pxxJUDg333qp6bXACxUvHZUatrWYF3tUsF4uBR7WXdDq2TZVDA3LvqUrSyStLCmDsFfgJGAF8KuB5EqNP+42AUuAuzr7aqVhYswjGuy3iSbqSEH7dHOAcLmdUPVK9zLWMhmol4NQxLwU+ARYC+zWqWj1JrxNt1daq+depEMJ4Vb1utQJqCK91LSROlYdzLtfJwGdqQn6XDjmZp2tlfWn3XEcx3Ecx3Ecx6E6nAT6ZuhHGsbkZgAAAABJRU5ErkJggg=="
          id="b"
          width={100}
          height={100}
        />
      </defs>
    </svg>
  );
}

export default UserIcon;
