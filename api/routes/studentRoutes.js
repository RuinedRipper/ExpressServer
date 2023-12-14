const express = require("express");
const router = express.Router();
const {
  listOfStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentController");

router.route("/student").get(listOfStudents).post(createStudent);
/**
 * @swagger
 * /student:
 *   get:
 *     tags: [Students]
 *     summary: Retrieve list of students
 *     description: Retrieve list of students. Can be used to search students by first letter of their name.
 *     parameters:
 *       - in: query
 *         name: letter
 *         required: false
 *         description: The student's name's first letter.
 *         schema:
 *           type: character
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The student's ID.
 *                     example: 0
 *                   name:
 *                     type: string
 *                     description: The student's name.
 *                     example: Ushakov RostiSlave
 *                   group:
 *                     type: string
 *                     description: The student's group.
 *                     example: RPZ 20 1/9
 *                   photo:
 *                     type: string
 *                     description: The student's photo url.
 *                     example: https://photourl.com
 *                   mark:
 *                     type: integer
 *                     description: The student's mark.
 *                     example: 5
 *                   isDonePr:
 *                     type: boolean
 *                     description: Is the student's pr is done or not.
 *                     example: true
 *                   createdAt:
 *                     type: datetime
 *                     description: Date the student was created at.
 *                     example: 2023-11-16T14:12:13.241Z
 *                   updatedAt:
 *                     type: datetime
 *                     description: Date the student was updated at.
 *                     example: 2023-11-16T14:12:13.241Z
 *                   __v:
 *                     type: integer
 *                     description: Amount of times this entity was updated.
 *                     example: 0
 *
 *       400:
 *         description: Bad request.
 *       404:
 *         description: No students was found.
 *       500:
 *         description: Internal server error.
 *
 *   post:
 *     tags: [Students]
 *     summary: Add new student to API
 *     description: Add new student to API.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The student's name.
 *                 example: Ushakov RostiSlave
 *               group:
 *                 type: string
 *                 description: The student's name.
 *                 example: RPZ 20 1/9
 *               photo:
 *                 type: string
 *                 description: The student's photo url.
 *                 example: https://photourl.com
 *               mark:
 *                 type: integer
 *                 description: The student's mark.
 *                 example: 5
 *               isDonePr:
 *                 type: boolean
 *                 description: Is the student's pr is done or not.
 *                 example: true
 *
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The student's ID.
 *                   example: 0
 *                 name:
 *                   type: string
 *                   description: The student's name.
 *                   example: Ushakov RostiSlave
 *                 group:
 *                   type: string
 *                   description: The student's group.
 *                   example: RPZ 20 1/9
 *                 photo:
 *                   type: string
 *                   description: The student's photo url.
 *                   example: https://photourl.com
 *                 mark:
 *                   type: integer
 *                   description: The student's mark.
 *                   example: 5
 *                 isDonePr:
 *                   type: boolean
 *                   description: Is the student's pr is done or not.
 *                   example: true
 *                 createdAt:
 *                   type: datetime
 *                   description: Date the student was created at.
 *                   example: 2023-11-16T14:12:13.241Z
 *                 updatedAt:
 *                   type: datetime
 *                   description: Date the student was updated at.
 *                   example: 2023-11-16T14:12:13.241Z
 *                 __v:
 *                   type: integer
 *                   description: Amount of times this entity was updated.
 *                   example: 0
 *
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 *
 */

router.route("/student/:id").delete(deleteStudent);
/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     tags: [Students]
 *     summary: Delete student from API
 *     description: Deletes student from API by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The student's id.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: boolean
 *                   description: Is waiting for response.
 *                   example: true
 *                 deletedCount:
 *                   type: integer
 *                   description: Amount of students that were deleted.
 *                   example: 0
 *
 *       400:
 *         description: Bad request.
 *       404:
 *         description: No students was with such id found.
 *       500:
 *         description: Internal server error.
 */

router.route("/student/:id").patch(updateStudent);
/**
 * @swagger
 * /student/{id}:
 *   patch:
 *     tags: [Students]
 *     summary: Update student's data
 *     description: Updates student's data by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The student's id.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The student's name.
 *                 example: Ushakov RostiSlave
 *               group:
 *                 type: string
 *                 description: The student's name.
 *                 example: RPZ 20 1/9
 *               photo:
 *                 type: string
 *                 description: The student's photo url.
 *                 example: https://photourl.com
 *               mark:
 *                 type: integer
 *                 description: The student's mark.
 *                 example: 5
 *               isDonePr:
 *                 type: boolean
 *                 description: Is the student's pr is done or not.
 *                 example: true
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The student's ID.
 *                   example: 0
 *                 name:
 *                   type: string
 *                   description: The student's name.
 *                   example: Ushakov RostiSlave
 *                 group:
 *                   type: string
 *                   description: The student's group.
 *                   example: RPZ 20 1/9
 *                 photo:
 *                   type: string
 *                   description: The student's photo url.
 *                   example: https://photourl.com
 *                 mark:
 *                   type: integer
 *                   description: The student's mark.
 *                   example: 5
 *                 isDonePr:
 *                   type: boolean
 *                   description: Is the student's pr is done or not.
 *                   example: true
 *                 updatedAt:
 *                   type: datetime
 *                   description: Date the student was updated at.
 *                   example: 2023-11-16T14:12:13.241Z
 *
 *       400:
 *         description: Bad request.
 *       404:
 *         description: No students was with such id found.
 *       500:
 *         description: Internal server error.
 */

module.exports = router;
