import AddLetterModal from './AddLetterModal'
import Header from '@/components/Header'
import List from '@/components/List'
import ActionForm from '@/components/ActionForm'

function MainPage() {
  return (
    <>
      <Header />
      <div className="p-6">
        <List />
        <AddLetterModal />
      </div>
      <ActionForm />
    </>
  );
}

export default MainPage;

