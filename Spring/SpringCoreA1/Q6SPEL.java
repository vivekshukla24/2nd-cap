
public class Book {

	private int bookId;
	private String bookName;
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

}

import java.util.List;

public class BookCollection {

	private List<Book> bookList;

	public List<Book> getBookList() {
		return bookList;
	}

	public void setBookList(List<Book> bookList) {
		this.bookList = bookList;
	}

	public Book getFirstBook()
	{
		return getBookList().get(0);
	}
}


public class BookLibrary {

	private List<Book> allBooks;
	private Book getFirstBook;
	public List<Book> getAllBooks() {
		return allBooks;
	}
	public void setAllBooks(List<Book> allBooks) {
		this.allBooks = allBooks;
	}
	public Book getGetFirstBook() {
		return getFirstBook;
	}
	public void setGetFirstBook(Book getFirstBook) {
		this.getFirstBook = getFirstBook;
	}

}

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Assignmentq7Spel {

	public static void main(String[] args) {

		ApplicationContext context=new ClassPathXmlApplicationContext("spring7.xml");
		BookLibrary library=(BookLibrary) context.getBean("bookLibrary");
		List<Book> allBooks=library.getAllBooks();
		for(Book book:allBooks)
		{
			System.out.println(book.getBookId()+"\t"+book.getBookName());
		}
		Book book=library.getGetFirstBook();
		System.out.println(book.getBookId()+"\t"+book.getBookName());

	}

}
