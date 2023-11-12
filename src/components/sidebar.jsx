import { Link } from 'react-router-dom';
import homeIcon from '@/assets/logos/home.svg';
import userIcon from '@/assets/logos/user.svg';
import coinIcon from '@/assets/logos/coin.svg';
import handIcon from '@/assets/logos/hand.svg';
import newsIcon from '@/assets/logos/news.svg';
import raihPeduliLogo from '@/assets/logos/logo.svg';
import transactionIcon from '@/assets/logos/transaction.svg';

const menu1 = [
  {
    link: '/dashboard',
    icon: homeIcon,
    desc: 'Dashboard',
  },
];

const menu2 = [
  {
    link: '/user',
    page: 'user',
    icon: userIcon,
    desc: 'Pengguna',
  },
  {
    link: '/fundraising',
    page: 'fundraising',
    icon: coinIcon,
    desc: 'Penggalangan Dana',
  },
  {
    link: '/volunteer',
    page: 'volunteer',
    icon: handIcon,
    desc: 'Lowongan Relawan',
  },
  {
    link: '/news',
    page: 'news',
    icon: newsIcon,
    desc: 'Berita',
  },
  {
    link: '/transaction',
    page: 'transaction',
    icon: transactionIcon,
    desc: 'Transaksi',
  },
];

function Sidebar({ isOpen, currentPage }) {
  return (
    <div
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
      className={`${isOpen ? 'w-72' : 'w-20'} h-screen bg-white shadow-xl duration-300`}
    >
      <div className="flex justify-center items-center py-5 mb-5">
        <img src={raihPeduliLogo} style={{ width: '45px' }} alt="Raih Peduli Logo" />
        <h1
          style={{ color: '#293066' }}
          className={`text-xl whitespace-nowrap font-medium uppercase ms-3 text-primary ${
            !isOpen && 'hidden'
          }`}
        >
          <span className="font-bold">Raih</span> Peduli
        </h1>
      </div>
      <ul className={`flex flex-col ${isOpen && 'gap-4'}`}>
        <li>
          <p className={`text-slate-500 text-xs font-medium ms-3 ${!isOpen && 'hidden'}`}>
            DASHBOARD
          </p>
          {menu1.map((menu, index) => (
            <Link
              key={index}
              to={menu.link}
              className="text-slate-400 text-sm cursor-pointer h-14 flex hover:bg-slate-200"
            >
              <div
                className={`flex w-full py-2 self-center gap-3 border-l-[5px] ${
                  currentPage === 'dashboard' ? 'border-blue-800' : 'border-white'
                } ${!isOpen ? 'justify-center' : 'gap-2'}`}
              >
                <img src={menu.icon} className={`w-5 h-5 ${isOpen ? 'ms-3' : 'ms-[-5px]'}`} />
                <span
                  className={`font-bold whitespace-nowrap  ${!isOpen && 'hidden'} duration-200`}
                >
                  {menu.desc}
                </span>
              </div>
            </Link>
          ))}
        </li>

        <li>
          <p className={`text-slate-500 text-xs font-medium ms-3 ${!isOpen && 'hidden'}`}>MENU</p>
          {menu2.map((menu, index) => (
            <Link
              key={index}
              to={menu.link}
              className={`text-slate-400 text-sm cursor-pointer h-14 flex hover:bg-slate-200 ${
                currentPage === menu.page && 'bg-slate-200'
              }`}
            >
              <div
                className={`flex w-full py-2 self-center gap-3 border-l-[5px] ${
                  currentPage === menu.page ? 'border-blue-800' : 'border-white'
                } ${!isOpen ? 'justify-center' : 'gap-2'}`}
              >
                <img src={menu.icon} className={`w-5 h-5 ${isOpen ? 'ms-3' : 'ms-[-5px]'}`} />
                <span
                  className={`font-bold whitespace-nowrap ${!isOpen && 'hidden'} ${
                    currentPage === menu.page ? 'text-[#293066]' : ''
                  }`}
                >
                  {menu.desc}
                </span>
              </div>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;