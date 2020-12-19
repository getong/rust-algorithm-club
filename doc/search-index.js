var searchIndex = JSON.parse('{\
"rust_algorithm_club":{"doc":"","i":[[5,"levenshtein_distance","rust_algorithm_club","Calculate Levenshtein distance for two UTF-8 encoded…",null,[[]]],[5,"levenshtein_distance_naive","","Naïvely calculate Levenshtein distance using the whole…",null,[[]]],[5,"hamming_distance","","Calculate Hamming distance to two unsigned intergers.",null,[[]]],[5,"hamming_distance_str","","Calculate Hamming distance of two UTF-8 encoded strings.",null,[[]]],[0,"collections","","Collections.",null,null],[3,"SinglyLinkedList","rust_algorithm_club::collections","A singly-linked list with owned nodes.",null,null],[3,"HashMap","","A hash map implemented with separate chaining collision…",null,null],[3,"HashSet","","A hash set implementation based on `HashMap`.",null,null],[3,"Stack","","A stack-like data structure implemented through a `Vec`.",null,null],[3,"BloomFilter","","A space efficient probablistic data structures offering an…",null,null],[11,"new","","Constructs a new, empty `SinglyLinkedList<T>`.",0,[[]]],[11,"push_front","","Prepends the given element value to the beginning of the…",0,[[]]],[11,"pop_front","","Removes and returns the first element of the container. If…",0,[[],["option",4]]],[11,"insert_after","","Inserts an element after the specified position in the…",0,[[],["result",4]]],[11,"remove","","Removes and returns an element at specified position from…",0,[[],["option",4]]],[11,"clear","","Removes all elements from the container.",0,[[]]],[11,"is_empty","","Checks whether the container is empty.",0,[[]]],[11,"len","","Gets the number of elements in the container.",0,[[]]],[11,"reverse","","Reverses the order of the elements in the container.",0,[[]]],[11,"iter","","Creates an iterator that yields immutable reference of…",0,[[],["iter",3]]],[11,"iter_mut","","Creates an iterator that yields mutable reference of each…",0,[[],["itermut",3]]],[11,"new","","Creates an empty map with capacity 0.",1,[[]]],[11,"with_capacity","","Creates a map with a given capacity as the number of…",1,[[]]],[11,"get","","Gets a reference to the value under the specified key.",1,[[],["option",4]]],[11,"get_mut","","Gets a mutable reference to the value under the specified…",1,[[],["option",4]]],[11,"insert","","Inserts key-value pair into the map. Replaces previous…",1,[[],["option",4]]],[11,"remove","","Removes a pair with specified key.",1,[[],["option",4]]],[11,"clear","","Removes all key-value pairs but keeps the allocated memory…",1,[[]]],[11,"is_empty","","Checks whether the container is empty.",1,[[]]],[11,"len","","Gets the number of key-value pairs in the container.",1,[[]]],[11,"bucket_count","","Gets the number of underlying buckets.",1,[[]]],[11,"iter","","Creates an iterator that yields immutable reference of…",1,[[]]],[11,"iter_mut","","Creates an iterator that yields mutable reference of each…",1,[[]]],[11,"into_iter","","Creates a consuming iterator yielding elements in…",1,[[]]],[11,"new","","Creates an empty set.",2,[[]]],[11,"len","","Gets the number of non-repetitive elements, equivalently…",2,[[]]],[11,"is_empty","","Returns whether there is no any element in the set.",2,[[]]],[11,"insert","","Inserts an element into the set.",2,[[]]],[11,"contains","","Returns whether an element is present in the set.",2,[[]]],[11,"remove","","Removes an element from the set.",2,[[]]],[11,"iter","","Creates an iterator yielding immutable reference of each…",2,[[]]],[11,"union","","Returns an iterator visiting items that exists in `self`,…",2,[[["hashset",3]]]],[11,"difference","","Returns an iterator visiting items that exists in `self`…",2,[[["hashset",3]]]],[11,"symmetric_difference","","Returns an iterator visiting items that only exists in…",2,[[["hashset",3]]]],[11,"intersection","","Returns an iterator visiting items that exists in both…",2,[[["hashset",3]]]],[11,"is_disjoint","","Returns true if `self` has no elements in common with…",2,[[["hashset",3]]]],[11,"is_subset","","Returns true if `other` contains at least all elements in…",2,[[["hashset",3]]]],[11,"is_superset","","Returns true if `self` contains at least all elements in…",2,[[["hashset",3]]]],[11,"with_capacity","","Initialize a stack of certain capacity.",3,[[]]],[11,"pop","","Removes the most recently added element that was not yet…",3,[[],["option",4]]],[11,"push","","Adds an element to the collection.",3,[[]]],[11,"size","","ReturnsReturns the size of collection, indicates how many…",3,[[]]],[11,"peek","","Peeks the last element added without tampering the…",3,[[],["option",4]]],[11,"new","","Creates an empty Bloom filter with desired capacity and…",4,[[]]],[11,"insert","","Inserts an element into the container.",4,[[]]],[11,"contains","","Returns whether an element is present in the container.",4,[[]]],[0,"searching","rust_algorithm_club","Searching algorithms.",null,null],[5,"linear_search","rust_algorithm_club::searching","Linear search.",null,[[],["option",4]]],[5,"binary_search","","Handmade binary search for a sorted sequence.",null,[[],["result",4]]],[5,"interpolation_search","","Search in sorted sequences by checking the next position…",null,[[],["result",4]]],[5,"exponential_search","","Exponential search. An binary search variant that can…",null,[[],["result",4]]],[0,"sorting","rust_algorithm_club","Sorting algorithms.",null,null],[5,"bubble_sort","rust_algorithm_club::sorting","Bubble sort",null,[[]]],[5,"bubble_sort_optimized","","Optimized bubble sort",null,[[]]],[5,"binary_insertion_sort","","Binary insertion sort.",null,[[]]],[5,"insertion_sort","","Insertion sort.",null,[[]]],[5,"selection_sort","","Selection sort.",null,[[]]],[5,"shellsort","","Shellsort",null,[[]]],[5,"mergesort","","Mergesort.",null,[[]]],[5,"mergesort_bottom_up","","Mergesort bottom-up version.",null,[[]]],[5,"heapsort","","Heapsort.",null,[[]]],[5,"quicksort","","Quicksort with Lomuto parition scheme.",null,[[]]],[5,"quicksort_3way","","Quicksort with 3-way parition scheme.",null,[[]]],[5,"quicksort_hoare","","Quicksort with Hoare parition scheme",null,[[]]],[5,"quicksort_manual_tco","","Manual tail-call opitimized quicksort with Lomuto parition…",null,[[]]],[5,"quicksort_optimized","","Tail-call opitimized quicksort with Lomuto parition scheme.",null,[[]]],[5,"bucket_sort","","Bucket sort",null,[[]]],[5,"counting_sort","","Counting sort",null,[[]]],[5,"radix_sort","","Radix sort for sorting unsigned integers.",null,[[]]],[5,"timsort","","Timsort.",null,[[]]],[5,"introsort","","Introsort.",null,[[]]],[5,"pdqsort","","Pattern-defeating quicksort.",null,[[]]],[17,"MARCIN_GAPS","","Marcin Ciura\'s gap sequence.",null,null],[11,"from","rust_algorithm_club::collections","",0,[[]]],[11,"into","","",0,[[]]],[11,"into_iter","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"drop","","",0,[[]]],[11,"into_iter","","Creates a consuming iterator, that is, one that moves each…",0,[[]]],[11,"default","","",1,[[]]],[11,"default","","",2,[[]]],[11,"eq","","",0,[[]]],[11,"eq","","Checks the equality of sets.",2,[[["hashset",3]]]],[11,"partial_cmp","","Compares sets to determine whether one is a subset of the…",2,[[["hashset",3]],[["option",4],["ordering",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"from_iter","","",2,[[]]]],"p":[[3,"SinglyLinkedList"],[3,"HashMap"],[3,"HashSet"],[3,"Stack"],[3,"BloomFilter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);