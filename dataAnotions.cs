
[Table("tblEmployee")]
class Employee
{

    [Key]
    public int EmpID { get; set; }

    [Column("EmployeeName")]
    public string EmpName { get; set; }
    public string Job { get; set; }
    public DateTime HireDate { get; set; }
    public Decimal Salary { get; set; }
    public int DeptNO { get; set; }
    [ForeignKey("DeptNO")]
    public Department Department { get; set; }
}