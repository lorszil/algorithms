package stack.java;

public class Stack <T> {

    StackElement <T> currentElement;



    public void putElem(T value){
        StackElement <T> newElement = new StackElement(value);
        if (currentElement != null) {
            newElement.prev = currentElement;
            currentElement.next = newElement;
        }
        currentElement = newElement;
    }

    public T popElem(){

        T last = currentElement.data;
        currentElement = currentElement.prev;
        if ( currentElement != null) {
            currentElement.next = null;
        }
        return last;

    }

}
