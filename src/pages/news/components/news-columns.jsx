import { Link } from 'react-router-dom';
import InfoIcon from '@/assets/icons/info';
import PencilIcon from '@/assets/icons/pencil';
import { Button } from '@/components/ui/button';
import ButtonDelete from '@/pages/news/components/alert-dialog'

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: 'Judul',
    accessorKey: 'title',
  },
  {
    header: 'Gambar',
    accessorKey: 'photo',
  },
  {
    header: 'Deskripsi',
    accessorKey: 'description',
  },
  
  {
    header: 'Aksi',
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            className="bg-[#E28100] hover:bg-[#E28100]/80"
            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          >
            <Link to={`/berita/${id}?edit=true`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          >
            <Link to={`/berita/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <ButtonDelete id={id} />
        </div>
      );
    },
  },
];
