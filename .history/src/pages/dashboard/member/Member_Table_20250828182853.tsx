"use client"
import {
  Box,
  Card,
  CardContent,
  Typography,

  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,

} from "@mui/material"

const Member_Table = () => {
    return (
        <div>
            <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="text.primary">
              Recent Activities
            </Typography>
            <Paper sx={{ overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.50" }}>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>#</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Activity</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivities.map((act, index) => (
                    <TableRow
                      key={act.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.50" },
                        bgcolor: index % 2 === 0 ? "background.paper" : "grey.25",
                      }}
                    >
                      <TableCell sx={{ color: "text.primary" }}>#{act.id}</TableCell>
                      <TableCell sx={{ color: "text.primary" }}>{act.activity}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{act.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={act.status}
                          size="small"
                          color={
                            act.status === "Completed"
                              ? "secondary"
                              : act.status === "Pending"
                              ? "primary"
                              : "default"
                          }
                          variant={act.status === "Cancelled" ? "outlined" : "filled"}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </CardContent>
        </Card>
        </div>
    );
};

export default Member_Table;