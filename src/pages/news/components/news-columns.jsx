import { Link } from 'react-router-dom';
import InfoIcon from '@/assets/icons/info';
import TrashIcon from '@/assets/icons/trash';
import PencilIcon from '@/assets/icons/pencil';
import { Button } from '@/components/ui/button';
import { deleteNews } from "@/utils/api/news";

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
          <Button
            size="icon"
            className="bg-[#BF1616] hover:bg-[#BF1616]/80"
            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            onClick={() => {
              if (confirm("Hapus Berita?")) {
                deleteNews(id)
                  .then((message) => alert(message))
                  .catch((message) => alert(message));
              } else {
                alert("Batal hapus Berita");
              }
            }}
          >
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
