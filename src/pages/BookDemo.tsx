import { Book, BookHeader, BookTitle, BookDescription } from '@/components/ui/book';

const BookDemo = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-neutral-950'>
      <Book size='lg' color='violet' radius='xl'>
        <BookHeader>
          <BookTitle>Panthos Playbook</BookTitle>
          <BookDescription>Arquitetura de crescimento e jornada de compra.</BookDescription>
        </BookHeader>
      </Book>
    </div>
  );
};

export default BookDemo;


