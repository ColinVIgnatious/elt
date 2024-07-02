
import './App.css'
import { Button } from "@/components/ui/button"
import {
  Table,TableCaption,
  TableBody,
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
    <div className="w-[1200px] border">
      <AspectRatio ratio={16 / 9}>
     
      <Table className="table-auto">
      <TableCaption className="caption-top">
      <div className="flex justify-between items-center mb-4">
            <div className="left-items">
              <label className="block text-[#313336] py-2 font-bold h-5 font-sf-pro" htmlFor="">
                Upcoming classes
              </label>
              <label className="block text-[#5F5F61] py-2 h-4 font-inter" htmlFor="">
                For next 7 days
              </label>

            </div>
            <div className="right-items flex items-center space-x-2">
              <Label htmlFor="booked">Booked only</Label>
              <Checkbox id="booked" />
            </div>
          </div>
      </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[300px]">Class Name</TableHead>
      <TableHead>Staff Name</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="h-17">
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>
       
       {/* <Container className="mt-4"> */}
      {/* <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}> */}
          <NameCard avatarUrl={user.avatarUrl} name={user.name} details={user.details} />
        {/* </Col>
      </Row> */}
    {/* </Container> */}
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
