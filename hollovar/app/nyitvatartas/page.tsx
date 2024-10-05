import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export default function OpenHoursPage() {
  const openHours = [
    { day: "Hétfő", hours: "9:00 - 17:00" },
    { day: "Kedd", hours: "9:00 - 17:00" },
    { day: "Szerda", hours: "9:00 - 17:00" },
    { day: "Csütörtök", hours: "9:00 - 17:00" },
    { day: "Péntek", hours: "9:00 - 17:00" },
    { day: "Szombat", hours: "10:00 - 15:00" },
    { day: "Vasárnap", hours: "Zárva" }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center pt-[5.25rem]">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <Card className="sm:w-full max-w-md mx-auto relative z-10 bg-white/80 backdrop-blur-md shadow-xl my-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Nyitvatartás</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Nap</TableHead>
                <TableHead className="text-right">Órák</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {openHours.map((item) => (
                <TableRow key={item.day}>
                  <TableCell className="font-medium">{item.day}</TableCell>
                  <TableCell className="text-right">{item.hours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
