#include <iostream>

using namespace std;

class Node {
    public:
        int data;
        Node* next;
};
Node* insertnode(Node* head, int data) {
    Node* temp = new Node();
    temp->data = data;
    temp->next = NULL;
    if(head == NULL) {
        head = temp;
    }
    else {
        Node* temp1 = head;
        while(temp1->next != NULL) {
            temp1 = temp1->next;
        }
        temp1->next = temp;
    }
    return head;
}
 int main(int argc, const char** argv) {
    Node *head = NULL;
head=new Node();
head->data=1;
head->next=NULL;
    return 0;
}