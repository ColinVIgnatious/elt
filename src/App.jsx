
import './App.css'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import NameCard from './components/NameCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const user = {
    avatarUrl: 'https://via.placeholder.com/100',
    name: 'John Doe',
    details: 'Additional details'
  };

  return (
    <>
    <div className="w-[1200px]">
      <AspectRatio ratio={16 / 9}>
      <div className="flex justify-between items-center mb-4">
            <div className="left-items">
              <label className="block text-[#222124] py-2" htmlFor="">

                Upcoming classes
              </label>
              <label className="block text-gray-600 py-2" htmlFor="">
                For next 7 days
              </label>
            </div>
            <div className="right-items flex items-center space-x-2">
              <Label htmlFor="booked">Booked only</Label>
              <Checkbox id="booked" />
            </div>
          </div>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[300px]">Class Name</TableHead>
      <TableHead>Staff Name</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>
       
       <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <NameCard avatarUrl={user.avatarUrl} name={user.name} details={user.details} />
        </Col>
      </Row>
    </Container>
    </TableCell>
      <TableCell className="text-right"><Button variant="outline">Book Now</Button></TableCell>
    </TableRow>
  </TableBody>
</Table>
</AspectRatio>
</div>
    </>
  )
}

export default App
